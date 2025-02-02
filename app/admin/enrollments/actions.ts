"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/lib/prisma";

const EnrollmentStatus = z.enum([
  "PENDING",
  "APPROVED",
  "EXPIRED",
  "REJECTED",
  "CANCELLED",
  "COMPLETED",
]);

const EnrollmentSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  courseId: z.string().min(1, "Course ID is required"),
  status: EnrollmentStatus.default("PENDING"),
  enrolledAt: z.date().optional(),
  expiresAt: z.date().optional(),
  completedAt: z.date().optional(),
  price: z.number().nonnegative("Price must be non-negative"),
  progress: z.number().min(0).max(100).optional(),
  lastAccessedContentId: z.string().optional(),
});

type EnrollmentInput = z.infer<typeof EnrollmentSchema>;

type ActionState = {
  errors?: {
    [K in keyof EnrollmentInput]?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function getFilteredEnrollments(params: {
  page?: number;
  limit?: number;
  search?: string;
  status?: z.infer<typeof EnrollmentStatus>;
  userId?: string;
  courseId?: string;
  orderBy?: "enrolledAt" | "expiresAt" | "completedAt" | "createdAt";
  orderDirection?: "asc" | "desc";
}) {
  const {
    page = 1,
    limit = 10,
    search = "",
    status,
    userId,
    courseId,
    orderBy = "createdAt",
    orderDirection = "desc",
  } = params;

  const where: any = {};

  if (status) {
    where.status = status;
  }
  if (userId) {
    where.userId = userId;
  }
  if (courseId) {
    where.courseId = courseId;
  }
  if (search) {
    where.OR = [
      { user: { name: { contains: search, mode: "insensitive" } } },
      { course: { title: { contains: search, mode: "insensitive" } } },
    ];
  }

  const [enrollments, totalCount] = await Promise.all([
    prisma.enrollment.findMany({
      where,
      orderBy: { [orderBy]: orderDirection },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        user: { select: { id: true, name: true, email: true } },
        course: { select: { id: true, title: true } },
      },
    }),
    prisma.enrollment.count({ where }),
  ]);

  return {
    enrollments,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
    },
  };
}

export async function getEnrollmentById(id: string) {
  const enrollment = await prisma.enrollment.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, name: true, email: true } },
      course: {
        select: {
          id: true,
          title: true,
          lessons: { select: { id: true, title: true } },
        },
      },
      payments: {
        select: { id: true, amount: true, status: true, createdAt: true },
      },
    },
  });

  if (!enrollment) {
    throw new Error("Enrollment not found");
  }

  return enrollment;
}

export async function createEnrollment(
  prevState: ActionState,
  formData: FormData
) {
  const validatedFields = EnrollmentSchema.safeParse({
    userId: formData.get("userId"),
    courseId: formData.get("courseId"),
    status: formData.get("status"),
    enrolledAt: formData.get("enrolledAt")
      ? new Date(formData.get("enrolledAt") as string)
      : undefined,
    expiresAt: formData.get("expiresAt")
      ? new Date(formData.get("expiresAt") as string)
      : undefined,
    completedAt: formData.get("completedAt")
      ? new Date(formData.get("completedAt") as string)
      : undefined,
    price: Number(formData.get("price")),
    progress: formData.get("progress")
      ? Number(formData.get("progress"))
      : undefined,
    lastAccessedContentId: formData.get("lastAccessedContentId") as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to create enrollment due to validation errors.",
      success: false,
    };
  }

  try {
    const enrollment = await prisma.enrollment.create({
      data: validatedFields.data,
    });

    revalidatePath("/enrollments");
    return {
      success: true,
      message: "Enrollment created successfully",
      enrollment,
    };
  } catch (error) {
    console.error("Failed to create enrollment:", error);
    return {
      success: false,
      message: "Failed to create enrollment. Please try again.",
    };
  }
}

export async function updateEnrollment(
  id: string,
  prevState: ActionState,
  formData: FormData
) {
  const validatedFields = EnrollmentSchema.partial().safeParse({
    userId: formData.get("userId"),
    courseId: formData.get("courseId"),
    status: formData.get("status"),
    enrolledAt: formData.get("enrolledAt")
      ? new Date(formData.get("enrolledAt") as string)
      : undefined,
    expiresAt: formData.get("expiresAt")
      ? new Date(formData.get("expiresAt") as string)
      : undefined,
    completedAt: formData.get("completedAt")
      ? new Date(formData.get("completedAt") as string)
      : undefined,
    price: formData.get("price") ? Number(formData.get("price")) : undefined,
    progress: formData.get("progress")
      ? Number(formData.get("progress"))
      : undefined,
    lastAccessedContentId: formData.get("lastAccessedContentId") as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to update enrollment due to validation errors.",
      success: false,
    };
  }

  try {
    const enrollment = await prisma.enrollment.update({
      where: { id },
      data: validatedFields.data,
    });

    revalidatePath("/enrollments");
    return {
      success: true,
      message: "Enrollment updated successfully",
      enrollment,
    };
  } catch (error) {
    console.error("Failed to update enrollment:", error);
    return {
      success: false,
      message: "Failed to update enrollment. Please try again.",
    };
  }
}

export async function deleteEnrollment(
  prevState: ActionState,
  formData: FormData
) {
  const id = formData.get("id") as string;
  if (!id) {
    return {
      success: false,
      message: "Enrollment ID is required",
    };
  }

  try {
    await prisma.enrollment.delete({ where: { id } });

    revalidatePath("/enrollments");
    return { success: true, message: "Enrollment deleted successfully" };
  } catch (error) {
    console.error("Failed to delete enrollment:", error);
    return {
      success: false,
      message: "Failed to delete enrollment. Please try again.",
    };
  }
}

export async function updateEnrollmentProgress(id: string, progress: number) {
  try {
    const enrollment = await prisma.enrollment.update({
      where: { id },
      data: { progress },
    });

    revalidatePath("/enrollments");
    return {
      success: true,
      message: "Enrollment progress updated successfully",
      enrollment,
    };
  } catch (error) {
    console.error("Failed to update enrollment progress:", error);
    return {
      success: false,
      message: "Failed to update enrollment progress. Please try again.",
    };
  }
}

export type FilteredEnrollments = Awaited<
  ReturnType<typeof getFilteredEnrollments>
>["enrollments"];
