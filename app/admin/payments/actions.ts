"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/lib/prisma";

const PaymentStatus = z.enum(["PENDING", "COMPLETED", "FAILED", "REFUNDED"]);

const PaymentSchema = z.object({
  amount: z.number().positive("Amount must be positive"),
  status: PaymentStatus.default("PENDING"),
  transactionId: z.string().nullable(),
  currency: z.string().nullable(),
  enrollmentId: z.string().min(1, "Enrollment ID is required"),
});

type PaymentInput = z.infer<typeof PaymentSchema>;

type ActionState = {
  errors?: {
    [K in keyof PaymentInput]?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function getFilteredPayments(params: {
  page?: number;
  limit?: number;
  search?: string;
  status?: z.infer<typeof PaymentStatus>;
  orderBy?: "amount" | "status" | "createdAt";
  orderDirection?: "asc" | "desc";
}) {
  const {
    page = 1,
    limit = 10,
    search = "",
    status,
    orderBy = "createdAt",
    orderDirection = "desc",
  } = params;

  const where: {
    OR?: { transactionId: { contains: string; mode: "insensitive" } }[];
    status?: z.infer<typeof PaymentStatus>;
  } = {};

  if (search) {
    where.OR = [{ transactionId: { contains: search, mode: "insensitive" } }];
  }
  if (status) {
    where.status = status;
  }

  const [payments, totalCount] = await Promise.all([
    prisma.payment.findMany({
      where,
      orderBy: { [orderBy]: orderDirection },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        enrollment: {
          select: { id: true, course: { select: { title: true } } },
        },
      },
    }),
    prisma.payment.count({ where }),
  ]);

  return {
    payments,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
    },
  };
}

export async function getPaymentById(id: string) {
  const payment = await prisma.payment.findUnique({
    where: { id },
    include: {
      enrollment: {
        include: {
          user: { select: { id: true, name: true, email: true } },
          course: { select: { id: true, title: true } },
        },
      },
    },
  });

  if (!payment) {
    throw new Error("Payment not found");
  }

  return payment;
}

export async function createPayment(
  prevState: ActionState,
  formData: FormData
) {
  const validatedFields = PaymentSchema.safeParse({
    amount: Number(formData.get("amount")),
    status: formData.get("status"),
    transactionId: formData.get("transactionId"),
    currency: formData.get("currency"),
    enrollmentId: formData.get("enrollmentId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to create payment due to validation errors.",
      success: false,
    };
  }

  try {
    const payment = await prisma.payment.create({
      data: validatedFields.data,
    });

    revalidatePath("/payments");
    return {
      success: true,
      message: "Payment created successfully",
      payment,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to create payment. Please try again.",
    };
  }
}

export async function updatePayment(
  id: string,
  prevState: ActionState,
  formData: FormData
) {
  const validatedFields = PaymentSchema.safeParse({
    amount: Number(formData.get("amount")),
    status: formData.get("status"),
    transactionId: formData.get("transactionId"),
    currency: formData.get("currency"),
    enrollmentId: formData.get("enrollmentId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to update payment due to validation errors.",
      success: false,
    };
  }

  try {
    const payment = await prisma.payment.update({
      where: { id },
      data: validatedFields.data,
    });

    revalidatePath("/payments");
    return {
      success: true,
      message: "Payment updated successfully",
      payment,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update payment. Please try again.",
    };
  }
}

export async function deletePayment(
  prevState: ActionState,
  formData: FormData
) {
  const id = formData.get("id") as string;
  if (!id) {
    return {
      success: false,
      message: "Payment ID is required",
    };
  }

  try {
    await prisma.payment.delete({ where: { id } });

    revalidatePath("/payments");
    return { success: true, message: "Payment deleted successfully" };
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete payment. Please try again.",
    };
  }
}

export type FilteredPayments = Awaited<
  ReturnType<typeof getFilteredPayments>
>["payments"];
