"use server";

import prisma from "@/lib/prisma";

export async function getDashboardStats() {
  const [
    categoriesCount,
    coursesCount,
    lessonsCount,
    enrollmentsCount,
    usersCount,
    revenue,
  ] = await Promise.all([
    prisma.category.count(),
    prisma.course.count(),
    prisma.lesson.count(),
    prisma.enrollment.count(),
    prisma.user.count(),
    prisma.payment.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        status: "COMPLETED",
      },
    }),
  ]);

  return {
    categoriesCount,
    coursesCount,
    lessonsCount,
    enrollmentsCount,
    usersCount,
    revenue: revenue._sum.amount || 0,
  };
}

export async function getRecentEnrollments() {
  return prisma.enrollment.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
      course: {
        select: {
          title: true,
        },
      },
    },
  });
}
