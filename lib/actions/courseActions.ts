"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Define the schema for the Course object using Zod
const CourseSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

/**
 * Parses form data for a Course object using the defined schema.
 * @param formData - The form data containing 'CourseTitle' and 'CourseDescription'.
 * @returns Parsed data or an error message.
 */
const CourseParser = (formData: FormData) =>
  CourseSchema.safeParse({
    title: formData.get("CourseTitle"),
    description: formData.get("CourseDescription"),
  });

/**
 * Handles various actions related to Course entities.
 * @param action - The action to perform ('create', 'update', 'delete', 'getAll', 'getById').
 * @param courseId - The ID of the course (used for 'update', 'delete', 'getById').
 * @param formData - The form data for creating or updating a Course.
 * @returns A message indicating the result of the action and, if applicable, additional data.
 */
const handleCourseAction = async (
  action: "create" | "update" | "delete" | "getAll" | "getById",
  courseId?: string,
  formData?: FormData
) => {
  switch (action) {
    case "create": {
      const parse = CourseParser(formData!);

      if (!parse.success) {
        return { message: `Failed to create course: ${parse.error.message}` };
      }

      const data = parse.data;

      await prisma.course.create({
        data: {
          title: data.title,
          description: data.description,
          categoryId: "1",
        },
      });

      break;
    }

    case "update": {
      const parse = CourseParser(formData!);

      if (!parse.success) {
        return { message: `Failed to update course: ${parse.error.message}` };
      }

      const data = parse.data;

      await prisma.course.update({
        where: {
          id: courseId!,
        },
        data: {
          title: data.title,
          description: data.description,
        },
      });

      break;
    }

    case "delete":
      await prisma.course.delete({
        where: {
          id: courseId!,
        },
      });
      break;

    case "getAll":
      const allCourses = await prisma.course.findMany();
      return {
        message: "Retrieved all courses successfully",
        data: allCourses,
      };

    case "getById":
      const singleCourse = await prisma.course.findUnique({
        where: {
          id: courseId!,
        },
      });
      return { message: "Retrieved course successfully", data: singleCourse };

    default:
      throw new Error("Invalid action type");
  }

  revalidatePath("/");
  return { message: `${action} operation completed successfully` };
};

export default handleCourseAction;
