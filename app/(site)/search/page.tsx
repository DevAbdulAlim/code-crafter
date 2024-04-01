import prisma from "@/lib/prisma";
import Pagination from "@/components/Pagination";
import CourseSearchForm from "@/components/sections/CourseSearchForm";
import CourseSortForm from "@/components/sections/CourseSortForm";
import CourseFilter from "@/components/sections/CourseFilter";
import CourseCard from "@/components/CourseCard";
import CourseNotFound from "@/components/sections/CourseNotFound";

const CoursesListPage = async ({
  searchParams,
}: {
  searchParams: {
    page: number;
    order: string;
    sort: string;
    title: string;
    categories: string[];
  };
}) => {
  const { page, order, sort, title, categories } = searchParams;
  const currentPage = page || 1;
  const itemsPerPage = 5;
  const skipAmount = (currentPage - 1) * itemsPerPage;
  const orderBy = order || "title";
  const sortBy = sort || "asc";
  const courseTitle = title || undefined;
  const categoryIds = categories || [];

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
        categoryId:
          categoryIds.length > 1
            ? {
                in: categoryIds,
                mode: "insensitive",
              }
            : {
                equals: categoryIds[0],
                mode: "insensitive",
              },
      },
    }),
    prisma.course.count(),
  ]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      {/* <div className="py-20 text-4xl text-center text-white bg-gray-600">
        Search Your Courses
      </div> */}
      <section className="px-4 py-12 bg-blue-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <CourseFilter />
            </div>

            {/* course list */}
            <div className="flex flex-col h-full md:col-span-3">
              {/* Search and Sort */}
              <div className="flex items-center justify-between my-8">
                {/* Search by */}
                <CourseSearchForm />

                {/* Sort by */}
                <CourseSortForm />
              </div>

              {/* Course List */}
              <div className="grow">
                {courses.length < 1 ? (
                  <CourseNotFound />
                ) : (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, index) => (
                      <CourseCard
                        // need to remove hardcode price and imageURL
                        price={""}
                        imageUrl={""}
                        key={index}
                        {...course}
                      />
                    ))}
                  </div>
                )}
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
    </>
  );
};

export default CoursesListPage;
