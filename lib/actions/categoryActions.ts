"use server";

import prisma from "@/config/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Define the schema for the Category object using Zod
const CategorySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});

/**
 * Parses form data for a Category object using the defined schema.
 * @param formData - The form data containing 'name' and 'description'.
 * @returns Parsed data or an error message.
 */
const CategoryParser = (formData: FormData) =>
  CategorySchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

/**
 * Handles various actions related to Category entities.
 * @param action - The action to perform ('create', 'update', 'delete', 'getAll', 'getById').
 * @param formData - The form data for creating or updating a Category.
 * @param categoryId - The ID of the category (used for 'update', 'delete', 'getById').
 * @returns A message indicating the result of the action and, if applicable, additional data.
 */
const handleCategoryAction = async (
  action: "create" | "update" | "delete" | "getAll" | "getById",
  formData?: FormData,
  categoryId?: string
) => {
  switch (action) {
    case "create": {
      const parse = CategoryParser(formData!);

      if (!parse.success) {
        return { message: `Failed to create category: ${parse.error.message}` };
      }

      const data = parse.data;

      await prisma.category.create({
        data,
      });

      break;
    }

    case "update": {
      const parse = CategoryParser(formData!);

      if (!parse.success) {
        return { message: `Failed to update category: ${parse.error.message}` };
      }

      const data = parse.data;

      await prisma.category.update({
        where: {
          id: categoryId!,
        },
        data,
      });

      break;
    }

    case "delete":
      await prisma.category.delete({
        where: {
          id: categoryId!,
        },
      });
      break;

    case "getAll":
      const allCategories = await prisma.category.findMany();
      return {
        message: "Retrieved all categories successfully",
        data: allCategories,
      };

    case "getById":
      const singleCategory = await prisma.category.findUnique({
        where: {
          id: categoryId!,
        },
      });
      return {
        message: "Retrieved category successfully",
        data: singleCategory,
      };

    default:
      throw new Error("Invalid action type");
  }

  revalidatePath("/admin/categories");
  return { message: `${action} operation completed successfully` };
};

export default handleCategoryAction;
