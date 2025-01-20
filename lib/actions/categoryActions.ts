"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CategorySchema = z.object({
  parentId: z.string().nullable(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  sortOrder: z.number().default(0),
  status: z.enum(["ACTIVE", "INACTIVE", "ARCHIVED"]).default("ACTIVE"),
});

const CategoryParser = (formData: FormData) =>
  CategorySchema.safeParse({
    parentId: formData.get("parentId") || null,
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    image: formData.get("image"),
    sortOrder: Number(formData.get("sortOrder")) || 0,
    status: formData.get("status") || "ACTIVE",
  });

const createCategory = async (formData: FormData) => {
  try {
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
  } catch (error) {
    console.error(error);
    return { message: "Database Error: Failed to Create Category" };
  }
};

const updateCategory = async (formData: FormData, categoryId: string) => {
  try {
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
  } catch (error) {
    console.error(error);
    return { message: "Database Error: Failed to Update Category" };
  }
};

const deleteCategory = async (categoryId: string) => {
  try {
    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });

    revalidatePath("/admin/categories");
    return { message: "Delete operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Delete Category" };
  }
};

const getAllCategories = async (
  skip: number,
  take: number,
  orderBy: object,
  where: object
) => {
  try {
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
  } catch {
    return { message: "Database Error: Failed to Retrieve Categories" };
  }
};

const getCategoryById = async (categoryId: string) => {
  try {
    const singleCategory = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });
    return {
      message: "Retrieved category successfully",
      data: singleCategory,
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve Category" };
  }
};

export {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
};
