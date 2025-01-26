import { Suspense } from "react";
import Link from "next/link";
import { getFilteredCategories } from "./actions";
import TableLayout from "@/components/table-layout";
import { TableSkeleton } from "@/components/table-skeleton";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumb";
import ListTable from "./list-table";

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 10;
  const search = searchParams.search?.toString() || "";
  const status =
    (searchParams.status as "ACTIVE" | "INACTIVE" | "ARCHIVED") || undefined;
  const orderBy =
    (searchParams.orderBy as "name" | "order" | "createdAt") || "order";
  const orderDirection =
    (searchParams.orderDirection as "asc" | "desc") || "asc";

  const { categories, pagination } = await getFilteredCategories({
    page,
    limit,
    search,
    status,
    orderBy,
    orderDirection,
  });

  const breadcrumbs = [
    { label: "Dashboard", href: "/admin" },
    { label: "Categories", href: "/categories", active: true },
  ];

  return (
    <div className="container mx-auto py-10">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Button asChild>
          <Link href="/admin/categories/create">
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
          { label: "Name", value: "name" },
          { label: "Order", value: "order" },
          { label: "Created At", value: "createdAt" },
        ]}
        sortValue={orderBy}
        sortDirection={orderDirection}
      >
        <Suspense fallback={<TableSkeleton />}>
          <ListTable categories={categories} />
        </Suspense>
      </TableLayout>
    </div>
  );
}
