import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import Curriculum from "./Curriculum";
import Faq from "./Faq";
import CourseOverview from "./CourseOverview";
import CourseHeader from "./CourseHeader";
import CourseDescription from "./CourseDescripton";

const getCourseById = async (slug: string) => {
  try {
    return await prisma.course.findUnique({
      where: { slug },
      include: {
        category: true,
        lessons: {
          include: {
            content: true,
          },
        },
        reviews: {
          include: {
            user: true,
          },
        },
        enrollments: true,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default async function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  const course = await getCourseById(params.slug);

  if (!course) return notFound();

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
          <div className="md:col-span-4">
            <CourseHeader course={course} />
            <div className="mb-8">
              <iframe
                width="100%"
                height="480px"
                className="rounded-lg shadow-md"
                src="https://www.youtube.com/embed/gfU1iZnjRZM"
                title="Next.js Conf Keynote (Next.js 14)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>

            <CourseDescription course={course} />
            <Curriculum course={course} />
            <Faq />
          </div>
          <div className="md:col-span-2">
            <div className="sticky top-16">
              <CourseOverview course={course} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
