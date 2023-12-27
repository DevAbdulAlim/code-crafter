"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().optional(),
});

const userParser = (formData: FormData) =>
  userSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    image: formData.get("image"),
  });

const createUser = async (userData: FormData) => {
  try {
    // Replace UserParser with your user data parsing logic
    const parse = userParser(userData);

    if (!parse.success) {
      console.log(parse.error.message);
      return { message: `Failed to create user: ${parse.error.message}` };
    }

    const data = parse.data;

    await prisma.user.create({
      data,
    });

    // Replace with your specific revalidation path
    revalidatePath("/admin/users");

    return { message: "Create operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Create User" };
  }
};

const updateUser = async (userData: FormData, userId: string) => {
  try {
    // Replace UserParser with your user data parsing logic
    const parse = userParser(userData);

    if (!parse.success) {
      return { message: `Failed to update user: ${parse.error.message}` };
    }

    const data = parse.data;

    await prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });

    // Replace with your specific revalidation path
    revalidatePath("/admin/users");

    return { message: "Update operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Update User" };
  }
};

const deleteUser = async (userId: string) => {
  try {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    // Replace with your specific revalidation path
    revalidatePath("/admin/users");

    return { message: "Delete operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Delete User" };
  }
};

const getAllUsers = async (
  skip: number,
  take: number,
  orderBy: object,
  where: object
) => {
  try {
    const [users, totalItems] = await prisma.$transaction([
      prisma.user.findMany({
        skip,
        take,
        orderBy,
        where,
      }),
      prisma.user.count({
        where,
      }),
    ]);

    return {
      message: "Retrieved all users successfully",
      data: [users, totalItems],
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve Users" };
  }
};

const getUserById = async (userId: string) => {
  try {
    const singleUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return {
      message: "Retrieved user successfully",
      data: singleUser,
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve User" };
  }
};

export { createUser, updateUser, deleteUser, getAllUsers, getUserById };
