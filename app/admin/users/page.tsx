import { Suspense } from "react";
import Link from "next/link";
import { getFilteredUsers } from "./actions";
import TableLayout from "@/components/table-layout";
import { TableSkeleton } from "@/components/table-skeleton";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumb";
import UserListTable from "./list-table";

export default async function UsersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 10;
  const search = searchParams.search?.toString() || "";
  const isAdmin = searchParams.isAdmin === "true" ? true : undefined;
  const orderBy =
    (searchParams.orderBy as "name" | "email" | "createdAt") || "createdAt";
  const orderDirection =
    (searchParams.orderDirection as "asc" | "desc") || "desc";

  const { users, pagination } = await getFilteredUsers({
    page,
    limit,
    search,
    isAdmin,
    orderBy,
    orderDirection,
  });

  const breadcrumbs = [
    { label: "Dashboard", href: "/admin" },
    { label: "Users", href: "/admin/users", active: true },
  ];

  return (
    <div className="container mx-auto py-10">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button asChild>
          <Link href="/admin/users/create">
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
          { label: "Email", value: "email" },
          { label: "Created At", value: "createdAt" },
        ]}
        sortValue={orderBy}
        sortDirection={orderDirection}
      >
        <Suspense fallback={<TableSkeleton />}>
          <UserListTable users={users} />
        </Suspense>
      </TableLayout>
    </div>
  );
}
