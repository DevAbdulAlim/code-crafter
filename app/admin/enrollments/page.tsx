import { Suspense } from "react";
import Link from "next/link";
import { getFilteredEnrollments } from "./actions";
import TableLayout from "@/components/table-layout";
import { TableSkeleton } from "@/components/table-skeleton";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumb";
import EnrollmentListTable from "./list-table";

export default async function EnrollmentsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 10;
  const search = searchParams.search?.toString() || "";
  const status =
    (searchParams.status as
      | "PENDING"
      | "APPROVED"
      | "EXPIRED"
      | "REJECTED"
      | "CANCELLED"
      | "COMPLETED") || undefined;
  const userId = searchParams.userId?.toString();
  const courseId = searchParams.courseId?.toString();
  const orderBy =
    (searchParams.orderBy as
      | "enrolledAt"
      | "expiresAt"
      | "completedAt"
      | "createdAt") || "createdAt";
  const orderDirection =
    (searchParams.orderDirection as "asc" | "desc") || "desc";

  const { enrollments, pagination } = await getFilteredEnrollments({
    page,
    limit,
    search,
    status,
    userId,
    courseId,
    orderBy,
    orderDirection,
  });

  const breadcrumbs = [
    { label: "Dashboard", href: "/admin" },
    { label: "Enrollments", href: "/enrollments", active: true },
  ];

  return (
    <div className="container mx-auto py-10">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Enrollments</h1>
        <Button asChild>
          <Link href="/admin/enrollments/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create
          </Link>
        </Button>
      </div>

      <TableLayout
        totalItems={pagination.totalItems}
        currentPage={pagination.currentPage}
        itemsPerPage={limit}
        searchValue={search}
        sortOptions={[
          { label: "Enrolled At", value: "enrolledAt" },
          { label: "Expires At", value: "expiresAt" },
          { label: "Completed At", value: "completedAt" },
          { label: "Created At", value: "createdAt" },
        ]}
        sortValue={orderBy}
        sortDirection={orderDirection}
      >
        <Suspense fallback={<TableSkeleton />}>
          <EnrollmentListTable enrollments={enrollments} />
        </Suspense>
      </TableLayout>
    </div>
  );
}
