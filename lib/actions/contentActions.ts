"use server";

import { z } from "zod";
import prisma from "../prisma";
import { revalidatePath } from "next/cache";

const contentSchema = z.object({
  contentId: z.number(),
  title: z.string(),
  description: z.string().optional(),
  media: z.string(),
  lessonId: z.string(),
});

const contentParser = (formData: FormData) => {
  const contentId = formData.get("contentId");
  const parsedContentId = contentId && parseInt(String(contentId), 10);

  return contentSchema.safeParse({
    contentId: parsedContentId,
    title: formData.get("title"),
    description: formData.get("description"),
    media: formData.get("media"),
    lessonId: formData.get("lessonId"),
  });
};

const createContent = async (contentData: FormData) => {
  try {
    const parse = contentParser(contentData);

    if (!parse.success) {
      console.log(parse.error.message);
      return { message: `Failed to create content: ${parse.error.message}` };
    }

    const data = parse.data;

    await prisma.content.create({
      data,
    });

    revalidatePath("/admin/contents");

    return { message: "Create operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Create Content" };
  }
};

const updateContent = async (contentData: FormData, contentId: string) => {
  try {
    const parse = contentParser(contentData);

    if (!parse.success) {
      return { message: `Failed to update content: ${parse.error.message}` };
    }

    const data = parse.data;

    await prisma.content.update({
      where: {
        id: contentId,
      },
      data,
    });

    revalidatePath("/admin/contents");

    return { message: "Update operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Update Content" };
  }
};

const deleteContent = async (contentId: string) => {
  try {
    await prisma.content.delete({
      where: {
        id: contentId,
      },
    });

    revalidatePath("/admin/contents");

    return { message: "Delete operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Delete Content" };
  }
};

const getAllContents = async (
  skip: number,
  take: number,
  orderBy: object,
  where: object
) => {
  try {
    const [contents, totalItems] = await prisma.$transaction([
      prisma.content.findMany({
        skip,
        take,
        orderBy,
        where,
      }),
      prisma.content.count({
        where,
      }),
    ]);

    return {
      message: "Retrieved all contents successfully",
      data: [contents, totalItems],
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve Contents" };
  }
};

const getContentById = async (contentId: string) => {
  try {
    const singleContent = await prisma.content.findUnique({
      where: {
        id: contentId,
      },
    });

    return {
      message: "Retrieved content successfully",
      data: singleContent,
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve Content" };
  }
};

export {
  createContent,
  updateContent,
  deleteContent,
  getAllContents,
  getContentById,
};
