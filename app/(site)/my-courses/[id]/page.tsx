import { getServerSession } from "next-auth/next";
import { notFound, redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import MyCourseDetail from "./MyCourseDetail";

async function getEnrollmentWithCourse(userId: string, courseId: string) {
  const enrollment = await prisma.enrollment.findFirst({
    where: {
      userId: userId,
      courseId: courseId,
    },
    include: {
      course: {
        include: {
          lessons: {
            include: {
              content: true,
            },
            orderBy: {
              order: "asc",
            },
          },
        },
      },
    },
  });

  if (!enrollment) {
    notFound();
  }

  return enrollment;
}

export default async function MyCourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/auth/signin");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    redirect("/auth/signin");
  }

  const enrollment = await getEnrollmentWithCourse(user.id, params.id);
  return <MyCourseDetail enrollment={enrollment} />;
}
