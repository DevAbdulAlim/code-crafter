"use server";

import prisma from "@/lib/prisma";
import { CourseStatus, type SkillLevel } from "@prisma/client";

export async function getFilteredCourses(params: {
  page?: number;
  limit?: number;
  search?: string;
  categories?: string[];
  skills?: SkillLevel[];
  rating?: number;
  orderBy?: string;
  sortBy?: "asc" | "desc";
}) {
  const {
    page = 1,
    limit = 5,
    search = "",
    categories = [],
    skills = [],
    rating,
    orderBy = "title",
    sortBy = "asc",
  } = params;

  const skipAmount = (page - 1) * limit;

  const where: any = {
    status: CourseStatus.PUBLISHED,
    title: {
      contains: search,
      mode: "insensitive",
    },
  };

  if (categories.length > 0) {
    where.categoryId =
      categories.length > 1 ? { in: categories } : { equals: categories[0] };
  }

  if (skills.length > 0) {
    where.level = { in: skills };
  }

  if (rating) {
    where.rating = { gte: rating };
  }

  const [courses, totalItems] = await prisma.$transaction([
    prisma.course.findMany({
      skip: skipAmount,
      take: limit,
      orderBy: { [orderBy]: sortBy },
      where,
    }),
    prisma.course.count({ where }),
  ]);

  return { courses, totalItems };
}

export async function getCategories() {
  const categories = await prisma.category.findMany({
    where: { status: "ACTIVE" },
    orderBy: { order: "asc" },
    include: {
      children: {
        where: { status: "ACTIVE" },
        orderBy: { order: "asc" },
      },
    },
  });

  return categories;
}
