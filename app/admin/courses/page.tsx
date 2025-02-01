import { Suspense } from "react";
import Link from "next/link";
import TableLayout from "@/components/table-layout";
import { TableSkeleton } from "@/components/table-skeleton";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumb";
import { getFilteredCourses } from "./actions";
import ListTable from "./list-table";

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 10;
  const search = searchParams.search?.toString() || "";
  const status =
    (searchParams.status as "DRAFT" | "PUBLISHED" | "ARCHIVED") || undefined;
  const categoryId = searchParams.categoryId?.toString();
  const level = searchParams.level as
    | "BEGINNER"
    | "INTERMEDIATE"
    | "ADVANCED"
    | "EXPERT"
    | "MASTER"
    | undefined;
  const orderBy =
    (searchParams.orderBy as "title" | "price" | "createdAt") || "createdAt";
  const orderDirection =
    (searchParams.orderDirection as "asc" | "desc") || "desc";

  const { courses, pagination } = await getFilteredCourses({
    page,
    limit,
    search,
    status,
    categoryId,
    level,
    orderBy,
    orderDirection,
  });

  const breadcrumbs = [
    { label: "Dashboard", href: "/admin" },
    { label: "Courses", href: "/courses", active: true },
  ];

  return (
    <div className="container mx-auto py-10">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Courses</h1>
        <Button asChild>
          <Link href="/admin/courses/create">
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
          { label: "Title", value: "title" },
          { label: "Price", value: "price" },
          { label: "Created At", value: "createdAt" },
        ]}
        sortValue={orderBy}
        sortDirection={orderDirection}
      >
        <Suspense fallback={<TableSkeleton />}>
          <ListTable courses={courses} />
        </Suspense>
      </TableLayout>
    </div>
  );
}
