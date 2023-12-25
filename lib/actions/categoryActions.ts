"use server";

import prisma from "@/config/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CategorySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});

const CategoryParser = (formData: FormData) =>
  CategorySchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

const createCategory = async (formData: FormData) => {
  const parse = CategoryParser(formData);

  if (!parse.success) {
    return { message: `Failed to create category: ${parse.error.message}` };
  }

  const data = parse.data;

  await prisma.category.create({
    data,
  });

  revalidatePath("/admin/categories");
  return { message: "Create operation completed successfully" };
};

const updateCategory = async (formData: FormData, categoryId: string) => {
  const parse = CategoryParser(formData);

  if (!parse.success) {
    return { message: `Failed to update category: ${parse.error.message}` };
  }

  const data = parse.data;

  await prisma.category.update({
    where: {
      id: categoryId,
    },
    data,
  });

  revalidatePath("/admin/categories");
  return { message: "Update operation completed successfully" };
};

const deleteCategory = async (categoryId: string) => {
  await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });

  revalidatePath("/admin/categories");
  return { message: "Delete operation completed successfully" };
};

const getAllCategories = async (
  skip: number,
  take: number,
  orderBy: object,
  where: object
) => {
  const [categories, totalItems] = await prisma.$transaction([
    prisma.category.findMany({
      skip: skip,
      take: take,
      orderBy: orderBy,
      where: where,
    }),
    prisma.category.count({
      where: where,
    }),
  ]);
  return {
    message: "Retrieved all categories successfully",
    data: [categories, totalItems],
  };
};

const getCategoryById = async (categoryId: string) => {
  const singleCategory = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });
  return {
    message: "Retrieved category successfully",
    data: singleCategory,
  };
};

export {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
};
