"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { PrismaClient, type Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const courseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be a positive number"),
  salePrice: z.number().min(0, "Sale price must be a positive number"),
  duration: z.string().min(1, "Duration is required"),
  level: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED", "EXPERT", "MASTER"]),
  language: z.string().min(1, "Language is required"),
  deadline: z.date().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
  image: z.string().url().optional(),
  thumbnail: z.string().url().optional(),
  video: z.string().url().optional(),
  isFeatured: z.boolean(),
  maxStudents: z.number().int().positive().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
  categoryId: z.string().min(1, "Category is required"),
});

const lessonSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  order: z.number().int().positive().optional(),
});

const contentSchema = z.object({
  type: z.enum(["TEXT", "VIDEO", "PDF"]),
  content: z.string().min(1, "Content is required"),
  duration: z.number().int().positive().optional(),
  order: z.number().int().positive().optional(),
});

export async function createCourse(formData: {
  course: Prisma.CourseCreateInput;
  lessons: Prisma.LessonCreateInput[];
  content: Record<number, Omit<Prisma.ContentCreateInput, "lesson">[]>;
}): Promise<{ success: boolean; courseId?: string; error?: string }> {
  try {
    const validatedCourse = courseSchema.parse(formData.course);
    const validatedLessons = z.array(lessonSchema).parse(formData.lessons);
    const validatedContent = Object.values(formData.content).map(
      (lessonContent) => z.array(contentSchema).parse(lessonContent)
    );

    const course = await prisma.course.create({
      data: {
        ...validatedCourse,
        lessons: {
          create: validatedLessons.map((lesson, index) => ({
            ...lesson,
            content: {
              create: validatedContent[index],
            },
          })),
        },
      },
      include: {
        lessons: {
          include: {
            content: true,
          },
        },
      },
    });

    revalidatePath("/courses");
    return { success: true, courseId: course.id };
  } catch (error) {
    console.error("Failed to create course:", error);
    return {
      success: false,
      error: "Failed to create course. Please try again.",
    };
  }
}
