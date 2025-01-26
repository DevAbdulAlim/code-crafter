"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/lib/prisma";

// Update the CategoryStatus enum to match the Prisma model
const CategoryStatus = z.enum(["ACTIVE", "INACTIVE", "ARCHIVED"]);

const CategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().nullable(),
  order: z.number().int().nonnegative().default(0),
  status: CategoryStatus.default("ACTIVE"),
  image: z.union([z.string().url(), z.literal("")]).nullable(),
  thumbnail: z.union([z.string().url(), z.literal("")]).nullable(),
  seoTitle: z.string().nullable(),
  seoDescription: z.string().nullable(),
  seoKeywords: z.string().nullable(),
  parentId: z.string().nullable(),
});

type CategoryInput = z.infer<typeof CategorySchema>;

type ActionState = {
  errors?: {
    [K in keyof CategoryInput]?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function getFilteredCategories(params: {
  page?: number;
  limit?: number;
  search?: string;
  status?: z.infer<typeof CategoryStatus>;
  parentId?: string | null;
  orderBy?: "name" | "order" | "createdAt";
  orderDirection?: "asc" | "desc";
}) {
  const {
    page = 1,
    limit = 10,
    search = "",
    status,
    parentId,
    orderBy = "order",
    orderDirection = "asc",
  } = params;

  const where: {
    OR?: { name: { contains: string; mode: "insensitive" } }[];
    status?: z.infer<typeof CategoryStatus>;
    parentId?: string | null;
  } = {};

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { name: { contains: search, mode: "insensitive" } },
    ];
  }
  if (status) {
    where.status = status;
  }
  if (parentId !== undefined) {
    where.parentId = parentId;
  }

  const [categories, totalCount] = await Promise.all([
    prisma.category.findMany({
      where,
      orderBy: { [orderBy]: orderDirection },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        parent: { select: { id: true, name: true } },
        children: { select: { id: true, name: true } },
        _count: { select: { courses: true } },
      },
    }),
    prisma.category.count({ where }),
  ]);

  return {
    categories,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
    },
  };
}

export async function getCategoryById(id: string) {
  const category = await prisma.category.findUnique({
    where: { id },
    include: {
      parent: { select: { id: true, name: true } },
      children: { select: { id: true, name: true } },
      courses: { select: { id: true, title: true }, take: 5 },
    },
  });

  if (!category) {
    throw new Error("Category not found");
  }

  return category;
}

export async function createCategory(
  prevState: ActionState,
  formData: FormData
) {
  const validatedFields = CategorySchema.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    order: Number(formData.get("order")),
    status: formData.get("status"),
    image: formData.get("image"),
    thumbnail: formData.get("thumbnail"),
    seoTitle: formData.get("seoTitle"),
    seoDescription: formData.get("seoDescription"),
    seoKeywords: formData.get("seoKeywords"),
    parentId: formData.get("parentId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to create category due to validation errors.",
      success: false,
    };
  }

  const { parentId, ...categoryData } = validatedFields.data;

  try {
    const category = await prisma.category.create({
      data: {
        ...categoryData,
        parent: parentId ? { connect: { id: parentId } } : undefined,
      },
    });

    revalidatePath("/categories");
    return {
      success: true,
      message: "Category created successfully",
      category,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to create category. Please try again.",
    };
  }
}

export async function updateCategory(
  id: string,
  prevState: ActionState,
  formData: FormData
) {
  const validatedFields = CategorySchema.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    order: Number(formData.get("order")),
    status: formData.get("status"),
    image: formData.get("image"),
    thumbnail: formData.get("thumbnail"),
    seoTitle: formData.get("seoTitle"),
    seoDescription: formData.get("seoDescription"),
    seoKeywords: formData.get("seoKeywords"),
    parentId: formData.get("parentId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to update category due to validation errors.",
      success: false,
    };
  }

  const { parentId, ...categoryData } = validatedFields.data;

  try {
    const category = await prisma.category.update({
      where: { id },
      data: {
        ...categoryData,
        parent: parentId ? { connect: { id: parentId } } : { disconnect: true },
      },
    });

    revalidatePath("/categories");
    return {
      success: true,
      message: "Category updated successfully",
      category,
    };
  } catch (error) {
    console.error("Failed to update category:", error);
    return {
      success: false,
      message: "Failed to update category. Please try again.",
    };
  }
}

export async function deleteCategory(
  prevState: ActionState,
  formData: FormData
) {
  const id = formData.get("id") as string;
  if (!id) {
    return {
      success: false,
      message: "Category ID is required",
    };
  }

  try {
    const categoryWithChildren = await prisma.category.findUnique({
      where: { id },
      include: { children: { select: { id: true } } },
    });

    if (categoryWithChildren?.children.length) {
      return {
        success: false,
        message: "Cannot delete a category with subcategories",
      };
    }

    const categoryWithCourses = await prisma.category.findUnique({
      where: { id },
      include: { courses: { select: { id: true } } },
    });

    if (categoryWithCourses?.courses.length) {
      return {
        success: false,
        message: "Cannot delete a category with associated courses",
      };
    }

    await prisma.category.delete({ where: { id } });

    revalidatePath("/categories");
    return { success: true, message: "Category deleted successfully" };
  } catch (error) {
    console.error("Failed to delete category:", error);
    return {
      success: false,
      message: "Failed to delete category. Please try again.",
    };
  }
}

export async function getCategoriesForDropdown() {
  return prisma.category.findMany({
    select: { id: true, name: true, parentId: true },
    orderBy: { name: "asc" },
  });
}

export type FilteredCategories = Awaited<
  ReturnType<typeof getFilteredCategories>
>["categories"];
