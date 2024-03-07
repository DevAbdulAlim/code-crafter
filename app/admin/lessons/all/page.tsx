import Breadcrumbs from "@/components/Breadcrumb";
import Pagination from "@/components/Pagination";
import LessonSort from "@/components/admin/lessons/LessonSort";
import LessonTable from "@/components/admin/lessons/LessonTable";
import NotFound from "@/components/notFound";
import Search from "@/components/search";
import ButtonLink from "@/components/ui/link";
import { getAllLessons } from "@/lib/actions/lessonActions";
import { Prisma } from "@prisma/client";
import { PlusIcon } from "lucide-react";

const LessonListPage = async ({
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
  const whereClause: Prisma.LessonWhereInput = query
    ? {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { courseId: { contains: query, mode: "insensitive" } },
        ],
      }
    : {};

  const foundedLessons = await getAllLessons(
    skipAmount,
    itemsPerPage,
    orderByField,
    whereClause
  );

  const [lessons = [], totalItems = 0] = foundedLessons?.data ?? [];

  const totalPages = Math.ceil((totalItems as number) / itemsPerPage);

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Lessons",
              href: "/admin/lessons/all",
              active: true,
            },
          ]}
        />

        <ButtonLink href="/admin/lessons/create">
          <span className="hidden md:block">Create Lesson</span>
          <PlusIcon className="md:ml-4" />
        </ButtonLink>
      </div>

      <div className="flex items-center justify-between my-8">
        <Search placeholder={query} />
        <LessonSort />
      </div>

      {Array.isArray(lessons) && lessons.length > 0 ? (
        <>
          <LessonTable data={lessons} />
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

export default LessonListPage;
