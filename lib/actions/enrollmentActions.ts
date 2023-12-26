import { z } from "zod";
import prisma from "../prisma";
import { revalidatePath } from "next/cache";

const enrollmentSchema = z.object({
  userId: z.string(),
  courseId: z.string(),
});

const enrollmentParser = (formData: FormData) =>
  enrollmentSchema.safeParse({
    userId: formData.get("userId"),
    courseId: formData.get("courseId"),
  });

const createEnrollment = async (enrollmentData: FormData) => {
  try {
    const parse = enrollmentParser(enrollmentData);

    if (!parse.success) {
      console.log(parse.error.message);
      return { message: `Failed to create enrollment: ${parse.error.message}` };
    }

    const data = parse.data;

    await prisma.enrollment.create({
      data,
    });

    revalidatePath("/admin/enrollments");

    return { message: "Create operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Create Enrollment" };
  }
};

const updateEnrollment = async (
  enrollmentData: FormData,
  enrollmentId: string
) => {
  try {
    const parse = enrollmentParser(enrollmentData);

    if (!parse.success) {
      return { message: `Failed to update enrollment: ${parse.error.message}` };
    }

    const data = parse.data;

    await prisma.enrollment.update({
      where: {
        id: enrollmentId,
      },
      data,
    });

    revalidatePath("/admin/enrollments");

    return { message: "Update operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Update Enrollment" };
  }
};

const deleteEnrollment = async (enrollmentId: string) => {
  try {
    await prisma.enrollment.delete({
      where: {
        id: enrollmentId,
      },
    });

    revalidatePath("/admin/enrollments");

    return { message: "Delete operation completed successfully" };
  } catch {
    return { message: "Database Error: Failed to Delete Enrollment" };
  }
};

const getAllEnrollments = async (
  skip: number,
  take: number,
  orderBy: object,
  where: object
) => {
  try {
    const [enrollments, totalItems] = await prisma.$transaction([
      prisma.enrollment.findMany({
        skip,
        take,
        orderBy,
        where,
      }),
      prisma.enrollment.count({
        where,
      }),
    ]);

    return {
      message: "Retrieved all enrollments successfully",
      data: [enrollments, totalItems],
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve Enrollments" };
  }
};

const getEnrollmentById = async (enrollmentId: string) => {
  try {
    const singleEnrollment = await prisma.enrollment.findUnique({
      where: {
        id: enrollmentId,
      },
    });

    return {
      message: "Retrieved enrollment successfully",
      data: singleEnrollment,
    };
  } catch {
    return { message: "Database Error: Failed to Retrieve Enrollment" };
  }
};

export {
  createEnrollment,
  updateEnrollment,
  deleteEnrollment,
  getAllEnrollments,
  getEnrollmentById,
};
