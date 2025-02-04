import { getFilteredCourses, getCategories } from "./actions";
import Pagination from "@/components/pagination";
import CourseSearchForm from "@/components/sections/CourseSearchForm";
import CourseSortForm from "@/components/sections/CourseSortForm";
import CourseCard from "@/components/CourseCard";
import CourseNotFound from "@/components/sections/CourseNotFound";
import CategoryFilter from "./category-filter";
import RatingFilter from "./rating-filter";
import SkillFilter from "./skill-filter";
import type { SkillLevel } from "@prisma/client";

export default async function CoursesListPage({
  searchParams,
}: {
  searchParams: {
    page?: string;
    order?: string;
    sort?: string;
    search?: string;
    categories?: string | string[];
    skills?: string | string[];
    rating?: string;
  };
}) {
  const page = searchParams.page ? Number.parseInt(searchParams.page, 10) : 1;
  const limit = 5;
  const orderBy = searchParams.order || "title";
  const sortBy = (searchParams.sort as "asc" | "desc") || "asc";
  const search = searchParams.search || "";
  const categories = Array.isArray(searchParams.categories)
    ? searchParams.categories
    : searchParams.categories
    ? [searchParams.categories]
    : [];
  const skills = Array.isArray(searchParams.skills)
    ? (searchParams.skills as SkillLevel[])
    : searchParams.skills
    ? [searchParams.skills as SkillLevel]
    : [];
  const rating = searchParams.rating
    ? Number.parseInt(searchParams.rating, 10)
    : undefined;

  const { courses, totalItems } = await getFilteredCourses({
    page,
    limit,
    search,
    categories,
    skills,
    rating,
    orderBy,
    sortBy,
  });

  const totalPages = Math.ceil(totalItems / limit);

  const categoriesData = await getCategories();

  return (
    <section className="px-4 py-12 bg-blue-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="shadow-md h-full p-5 bg-white">
              <h2 className="text-2xl mb-4 font-bold text-gray-700">Filter</h2>
              <hr className="mb-4" />
              <h3 className="mb-4 text-sm font-semibold text-gray-500">
                CATEGORY
              </h3>
              <CategoryFilter categories={categoriesData} />
              <hr className="mb-4" />
              <h3 className="mb-4 text-sm font-semibold text-gray-500">
                SKILL LEVEL
              </h3>
              <SkillFilter />
              <hr className="mb-4" />
              <h3 className="mb-4 text-sm font-semibold text-gray-500">
                RATINGS
              </h3>
              <RatingFilter />
            </div>
          </div>

          <div className="flex flex-col h-full md:col-span-3">
            <div className="flex items-center justify-between my-8">
              <CourseSearchForm />
              <CourseSortForm />
            </div>

            <div className="grow">
              {courses.length < 1 ? (
                <CourseNotFound />
              ) : (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}
            </div>

            <Pagination
              totalItems={totalItems}
              itemsPerPage={limit}
              currentPage={page}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
