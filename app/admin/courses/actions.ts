"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/lib/prisma";

export const CourseStatus = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);
export const SkillLevel = z.enum([
  "BEGINNER",
  "INTERMEDIATE",
  "ADVANCED",
  "EXPERT",
  "MASTER",
]);
export const ContentType = z.enum(["TEXT", "VIDEO", "PDF"]);

export const lessonContentSchema = z.object({
  type: ContentType,
  content: z.string(),
  duration: z.number().optional(),
  attachments: z.string().optional(),
  order: z.number().optional(),
});

export const lessonSchema = z.object({
  title: z.string().min(1, "Lesson title is required"),
  description: z.string().optional(),
  order: z.number().optional(),
  content: z.array(lessonContentSchema),
});

export const courseSchema = z.object({
  title: z.string().min(1, "Course title is required"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be a positive number"),
  salePrice: z.number().min(0, "Sale price must be a positive number"),
  duration: z.string(),
  level: SkillLevel,
  language: z.string(),
  deadline: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
  status: CourseStatus,
  image: z.string().url().optional(),
  thumbnail: z.string().url().optional(),
  video: z.string().url().optional(),
  isFeatured: z.boolean().default(false),
  maxStudents: z.number().int().positive().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
  categoryId: z.string(),
  lessons: z.array(lessonSchema),
});

export interface CourseState {
  message: string;
}

export async function createCourse(prevState: CourseState, formData: FormData) {
  const validatedFields = courseSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    price: Number.parseFloat(formData.get("price") as string),
    salePrice: Number.parseFloat(formData.get("salePrice") as string),
    duration: formData.get("duration"),
    level: formData.get("level"),
    language: formData.get("language"),
    deadline: formData.get("deadline"),
    status: formData.get("status"),
    image: formData.get("image"),
    thumbnail: formData.get("thumbnail"),
    video: formData.get("video"),
    isFeatured: formData.get("isFeatured") === "on",
    maxStudents: Number.parseInt(formData.get("maxStudents") as string),
    seoTitle: formData.get("seoTitle"),
    seoDescription: formData.get("seoDescription"),
    seoKeywords: formData.get("seoKeywords"),
    categoryId: formData.get("categoryId"),
    lessons: JSON.parse(formData.get("lessons") as string),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to create course.",
    };
  }

  const courseData = validatedFields.data;

  try {
    const createdCourse = await prisma.course.create({
      data: {
        title: courseData.title,
        description: courseData.description,
        price: courseData.price,
        salePrice: courseData.salePrice,
        duration: courseData.duration,
        level: courseData.level,
        language: courseData.language,
        deadline: courseData.deadline ? new Date(courseData.deadline) : null,
        status: courseData.status,
        image: courseData.image,
        thumbnail: courseData.thumbnail,
        video: courseData.video,
        isFeatured: courseData.isFeatured,
        maxStudents: courseData.maxStudents,
        seoTitle: courseData.seoTitle,
        seoDescription: courseData.seoDescription,
        seoKeywords: courseData.seoKeywords,
        categoryId: courseData.categoryId,
        lessons: {
          create: courseData.lessons.map((lesson) => ({
            title: lesson.title,
            description: lesson.description,
            order: lesson.order,
            content: {
              create: lesson.content.map((content) => ({
                type: content.type,
                content: content.content,
                duration: content.duration,
                attachments: content.attachments,
                order: content.order,
              })),
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

    console.log("Course created:", createdCourse);

    revalidatePath("/courses");
    return { message: "Course created successfully!" };
  } catch (error) {
    console.error("Failed to create course:", error);
    return { message: "Failed to create course." };
  } finally {
    await prisma.$disconnect();
  }
}

export async function getFilteredCourses(params: {
  page?: number;
  limit?: number;
  search?: string;
  status?: z.infer<typeof CourseStatus>;
  categoryId?: string;
  level?: z.infer<typeof SkillLevel>;
  orderBy?: "title" | "price" | "createdAt";
  orderDirection?: "asc" | "desc";
}) {
  const {
    page = 1,
    limit = 10,
    search = "",
    status,
    categoryId,
    level,
    orderBy = "createdAt",
    orderDirection = "desc",
  } = params;

  const where: {
    OR?: { title: { contains: string; mode: "insensitive" } }[];
    status?: z.infer<typeof CourseStatus>;
    categoryId?: string;
    level?: z.infer<typeof SkillLevel>;
  } = {};

  if (search) {
    where.OR = [{ title: { contains: search, mode: "insensitive" } }];
  }
  if (status) {
    where.status = status;
  }
  if (categoryId) {
    where.categoryId = categoryId;
  }
  if (level) {
    where.level = level;
  }

  const [courses, totalCount] = await Promise.all([
    prisma.course.findMany({
      where,
      orderBy: { [orderBy]: orderDirection },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        category: { select: { id: true, name: true } },
        _count: { select: { enrollments: true, lessons: true } },
      },
    }),
    prisma.course.count({ where }),
  ]);

  return {
    courses,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
    },
  };
}

export async function getCourseById(id: string) {
  const course = await prisma.course.findUnique({
    where: { id },
    include: {
      category: { select: { id: true, name: true } },
      lessons: { select: { id: true, title: true }, orderBy: { order: "asc" } },
      enrollments: { select: { id: true, userId: true }, take: 5 },
    },
  });

  if (!course) {
    throw new Error("Course not found");
  }

  return course;
}
