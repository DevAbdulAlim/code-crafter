"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/lib/prisma";

const UserSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(1, "Name is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  phone: z.string().optional(),
  isAdmin: z.boolean().default(false),
  image: z.string().url().optional(),
});

type UserInput = z.infer<typeof UserSchema>;

type ActionState = {
  errors?: {
    [K in keyof UserInput]?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function getFilteredUsers(params: {
  page?: number;
  limit?: number;
  search?: string;
  isAdmin?: boolean;
  orderBy?: "name" | "email" | "createdAt";
  orderDirection?: "asc" | "desc";
}) {
  const {
    page = 1,
    limit = 10,
    search = "",
    isAdmin,
    orderBy = "createdAt",
    orderDirection = "desc",
  } = params;

  const where: {
    OR?: { [key: string]: { contains: string; mode: "insensitive" } }[];
    isAdmin?: boolean;
  } = {};

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
    ];
  }
  if (isAdmin !== undefined) {
    where.isAdmin = isAdmin;
  }

  const [users, totalCount] = await Promise.all([
    prisma.user.findMany({
      where,
      orderBy: { [orderBy]: orderDirection },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        name: true,
        email: true,
        isAdmin: true,
        lastLogin: true,
        createdAt: true,
        _count: { select: { enrollments: true } },
      },
    }),
    prisma.user.count({ where }),
  ]);

  return {
    users,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
    },
  };
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      enrollments: {
        select: {
          id: true,
          course: { select: { id: true, title: true } },
          status: true,
        },
        take: 5,
      },
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export async function deleteUser(prevState: ActionState, formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) {
    return {
      success: false,
      message: "User ID is required",
    };
  }

  try {
    await prisma.user.delete({ where: { id } });

    revalidatePath("/users");
    return { success: true, message: "User deleted successfully" };
  } catch (error) {
    console.error("Failed to delete user:", error);
    return {
      success: false,
      message: "Failed to delete user. Please try again.",
    };
  }
}

export type FilteredUsers = Awaited<
  ReturnType<typeof getFilteredUsers>
>["users"];
