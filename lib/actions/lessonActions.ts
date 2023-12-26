"use server";

import prisma from "@/config/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const LessonSchema = z.object({
  lessonId: z.number(),
  title: z.string(),
  courseId: z.string(),
  description: z.string().optional(),
});

const LessonParser = (formData: FormData) => {
  const lessonId = formData.get("lessonId");
  const parsedLessonId = lessonId && parseInt(String(lessonId), 10);

  return LessonSchema.safeParse({
    lessonId: parsedLessonId,
    title: formData.get("title"),
    courseId: formData.get("courseId"),
    description: formData.get("description") || undefined,
  });
};

const createLesson = async (formData: FormData) => {
  try {
    const parse = LessonParser(formData);

    if (!parse.success) {
      console.log(parse.error.message);
      return { message: `Failed to create lesson: ${parse.error.message}` };
    }

    const data = parse.data;

    await prisma.lesson.create({
      data,
    });

    revalidatePath("/admin/lessons"); // Ensure revalidatePath is implemented
    return { message: "Create operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Create Lesson" };
  }
};

const updateLesson = async (formData: FormData, lessonId: string) => {
  try {
    const parse = LessonParser(formData);

    if (!parse.success) {
      return { message: `Failed to update lesson: ${parse.error.message}` };
    }

    const data = parse.data;

    await prisma.lesson.update({
      where: {
        id: lessonId,
      },
      data,
    });

    revalidatePath("/admin/lessons"); // Ensure revalidatePath is implemented
    return { message: "Update operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Update Lesson" };
  }
};

const deleteLesson = async (lessonId: string) => {
  try {
    await prisma.lesson.delete({
      where: {
        id: lessonId,
      },
    });

    revalidatePath("/admin/lessons"); // Ensure revalidatePath is implemented
    return { message: "Delete operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Delete Lesson" };
  }
};

const getAllLessons = async (
  skip: number,
  take: number,
  orderBy: object,
  where: object
) => {
  try {
    const [lessons, totalItems] = await prisma.$transaction([
      prisma.lesson.findMany({
        skip: skip,
        take: take,
        orderBy: orderBy,
        where: where,
      }),
      prisma.lesson.count({
        where: where,
      }),
    ]);
    return {
      message: "Retrieved all lessons successfully",
      data: [lessons, totalItems],
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve Lessons" };
  }
};

const getLessonById = async (lessonId: string) => {
  try {
    const singleLesson = await prisma.lesson.findUnique({
      where: {
        id: lessonId,
      },
    });
    return {
      message: "Retrieved lesson successfully",
      data: singleLesson,
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve Lesson" };
  }
};

export {
  createLesson,
  updateLesson,
  deleteLesson,
  getAllLessons,
  getLessonById,
};
