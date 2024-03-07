import Pagination from "@/components/Pagination";
import EnrollmentTable from "@/components/admin/enrollments/EnrollmentTable";
import Search from "@/components/search";
import { Prisma } from "@prisma/client";
import EnrollmentSort from "@/components/admin/enrollments/EnrollmentSort";
import ButtonLink from "@/components/ui/link";
import { PlusIcon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumb";
import { getAllEnrollments } from "@/lib/actions/enrollmentActions";
import NotFound from "@/components/notFound";

const EnrollmentListPage = async ({
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
  const orderBy = order || "userId";
  const sortBy = sort || "asc";
  const orderByField = {
    [orderBy]: sortBy as "asc" | "desc",
  };
  const whereClause: Prisma.EnrollmentWhereInput = query
    ? {
        OR: [{ userId: { contains: query, mode: "insensitive" } }],
      }
    : {};

  const foundedEnrollments = await getAllEnrollments(
    skipAmount,
    itemsPerPage,
    orderByField,
    whereClause
  );

  const [enrollments = [], totalItems = 0] = foundedEnrollments?.data ?? [];

  const totalPages = Math.ceil((totalItems as number) / itemsPerPage);
  console.log(enrollments);

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Enrollments",
              href: "/admin/enrollments/all",
              active: true,
            },
          ]}
        />

        <ButtonLink href="/admin/enrollments/create">
          <span className="hidden md:block">Create Enrollment</span>
          <PlusIcon className="md:ml-4" />
        </ButtonLink>
      </div>

      <div className="flex items-center justify-between my-8">
        <Search placeholder={query} />
        <EnrollmentSort />
      </div>

      {Array.isArray(enrollments) && enrollments.length > 0 ? (
        <>
          <EnrollmentTable data={enrollments} />
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

export default EnrollmentListPage;
