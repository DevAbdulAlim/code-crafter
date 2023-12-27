"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CourseSchema = z.object({
  title: z.string(),
  description: z.string(),
  categoryId: z.string(),
});

const courseParser = (formData: FormData) =>
  CourseSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    categoryId: formData.get("categoryId"),
  });

const createCourse = async (courseData: FormData) => {
  try {
    const parse = courseParser(courseData);

    if (!parse.success) {
      console.log(parse.error.message);
      return { message: `Failed to create course: ${parse.error.message}` };
    }

    const data = parse.data;

    await prisma.course.create({
      data,
    });

    revalidatePath("/admin/courses");

    return { message: "Create operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Create Course" };
  }
};

const updateCourse = async (courseData: FormData, courseId: string) => {
  try {
    const parse = courseParser(courseData);

    if (!parse.success) {
      return { message: `Failed to update course: ${parse.error.message}` };
    }

    const data = parse.data;

    await prisma.course.update({
      where: {
        id: courseId,
      },
      data,
    });

    revalidatePath("/admin/courses");

    return { message: "Update operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Update Course" };
  }
};

const deleteCourse = async (courseId: string) => {
  try {
    await prisma.course.delete({
      where: {
        id: courseId,
      },
    });

    revalidatePath("/admin/courses");

    return { message: "Delete operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Delete Course" };
  }
};

const getAllCourses = async (
  skip: number,
  take: number,
  orderBy: object,
  where: object
) => {
  try {
    const [courses, totalItems] = await prisma.$transaction([
      prisma.course.findMany({
        skip,
        take,
        orderBy,
        where,
      }),
      prisma.course.count({
        where,
      }),
    ]);

    return {
      message: "Retrieved all courses successfully",
      data: [courses, totalItems],
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve Courses" };
  }
};

const getCourseById = async (courseId: string) => {
  try {
    const singleCourse = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });

    return {
      message: "Retrieved course successfully",
      data: singleCourse,
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve Course" };
  }
};

export {
  createCourse,
  updateCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
};
