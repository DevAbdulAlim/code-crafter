import Breadcrumbs from "@/components/Breadcrumb";
import Pagination from "@/components/Pagination";
import CourseSort from "@/components/admin/courses/CourseSort";
import CourseTable from "@/components/admin/courses/CourseTable";
import NotFound from "@/components/notFound";
import Search from "@/components/search";
import ButtonLink from "@/components/ui/buttonLink";
import { getAllCourses } from "@/lib/actions/courseActions";
import { Prisma } from "@prisma/client";
import { PlusIcon } from "lucide-react";

const CourseListPage = async ({
  searchParams,
}: {
  searchParams: {
    page?: number;
    order?: string;
    sort?: string;
    query?: string;
  };
}) => {
  const { page, order, sort, query } = searchParams;
  const currentPage = page || 1;
  const itemsPerPage = 5;
  const skipAmount = (currentPage - 1) * itemsPerPage;
  const orderBy = order || "title";
  const sortBy = sort || "asc";
  const orderByField = {
    [orderBy]: sortBy as "asc" | "desc",
  };
  const whereClause: Prisma.CourseWhereInput = query
    ? {
        OR: [{ title: { contains: query, mode: "insensitive" } }],
      }
    : {};

  const foundedCourses = await getAllCourses(
    skipAmount,
    itemsPerPage,
    orderByField,
    whereClause
  );

  const [courses = [], totalItems = 0] = foundedCourses?.data ?? [];

  const totalPages = Math.ceil((totalItems as number) / itemsPerPage);

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Courses",
              href: "/admin/courses/all",
              active: true,
            },
          ]}
        />

        <ButtonLink href="/admin/courses/create">
          <span className="hidden md:block">Create Course</span>
          <PlusIcon className="md:ml-4" />
        </ButtonLink>
      </div>

      <div className="flex items-center justify-between my-8">
        <Search placeholder={query} />
        <CourseSort />
      </div>

      {Array.isArray(courses) && courses.length > 0 ? (
        <>
          <CourseTable data={courses} />
          <Pagination
            totalItems={totalItems as number}
            itemsPerPage={itemsPerPage}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default CourseListPage;
