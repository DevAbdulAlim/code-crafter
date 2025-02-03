import CourseCard from "@/components/CourseCard";
import prisma from "@/lib/prisma";

export default async function FeaturedCourses() {
  const featuredCourses = await prisma.course.findMany({
    where: {
      isFeatured: true,
    },
    take: 6,
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Featured Courses
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Explore our popular courses and start learning today!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
