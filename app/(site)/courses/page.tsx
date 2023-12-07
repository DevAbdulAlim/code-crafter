import prisma from "@/config/prisma";
import Pagination from "@/components/Pagination/Pagination";
import CourseSearchForm from "@/app/(dashboard)/admin/courses/CourseSearchForm";
import CourseSortForm from "@/app/(dashboard)/admin/courses/CourseSortForm";
import CourseFilter from "@/components/sections/CourseFilter";
import CourseCard2 from "@/components/Cards/CourseCard2";

const CoursesListPage = async ({
  searchParams,
}: {
  searchParams: {
    page: number;
    order: string;
    sort: string;
    title: string;
    category: string;
  };
}) => {
  const { page, order, sort, title, category } = searchParams;
  const currentPage = page || 1;
  const itemsPerPage = 5;
  const skipAmount = (currentPage - 1) * itemsPerPage;
  const orderBy = order || "title";
  const sortBy = sort || "asc";
  const courseTitle = title || undefined;

  const orderByField = {
    [orderBy]: sortBy as "asc" | "desc",
  };

  const [courses, totalItems] = await prisma.$transaction([
    prisma.course.findMany({
      skip: skipAmount,
      take: itemsPerPage,
      orderBy: orderByField,
      where: {
        title: {
          contains: courseTitle || undefined,
          mode: "insensitive",
        },
        categoryId: {
          contains: category || undefined, // Add category filtering
          mode: "insensitive",
        },
      },
    }),
    prisma.course.count(),
  ]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <CourseFilter />
          </div>

          {/* course list */}
          <div className="md:col-span-3">
            {/* Search and Sort */}
            <div className="my-8 flex items-center justify-between">
              {/* Search by */}
              <CourseSearchForm />

              {/* Sort by */}
              <CourseSortForm />
            </div>

            {/* Course List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard2 key={index} {...course} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesListPage;
