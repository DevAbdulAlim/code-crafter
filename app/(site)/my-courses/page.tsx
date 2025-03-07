import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import PurchasedCourseList from "./PurchasedCourseList";
import { authOptions } from "@/lib/auth";

export default async function MyCoursesPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/auth/signin");
  }

  const purchasedCourses = await prisma.enrollment.findMany({
    where: {
      user: {
        email: session.user.email,
      },
    },
    include: {
      course: {
        include: {
          lessons: {
            include: {
              content: true,
            },
          },
        },
      },
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>
      <PurchasedCourseList courses={purchasedCourses} />
    </div>
  );
}
