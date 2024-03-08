import Pagination from "@/components/Pagination";
import CategoryTable from "@/components/admin/categories/CategoryTable";
import Search from "@/components/search";
import { Prisma } from "@prisma/client";
import CategorySort from "@/components/admin/categories/CategorySort";
import { PlusIcon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumb";
import { getAllCategories } from "@/lib/actions/categoryActions";
import NotFound from "@/components/notFound";
import Link from "@/components/ui/link";

const CoursesListPage = async ({
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
  const orderBy = order || "name";
  const sortBy = sort || "asc";
  const orderByField = {
    [orderBy]: sortBy as "asc" | "desc",
  };
  const whereClause: Prisma.CategoryWhereInput = query
    ? {
        OR: [{ name: { contains: query, mode: "insensitive" } }],
      }
    : {};

  const foundedCategories = await getAllCategories(
    skipAmount,
    itemsPerPage,
    orderByField,
    whereClause
  );

  const [categories = [], totalItems = 0] = foundedCategories?.data ?? [];

  const totalPages = Math.ceil((totalItems as number) / itemsPerPage);
  console.log(categories);

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Categories",
              href: "/admin/categories/all",
              active: true,
            },
          ]}
        />

        <Link to="/admin/categories/create">
          <span className="hidden md:block">Create Category</span>
          <PlusIcon className="md:ml-4" />
        </Link>
      </div>

      <div className="flex items-center justify-between my-8">
        <Search placeholder={query} />
        <CategorySort />
      </div>

      {Array.isArray(categories) && categories.length > 0 ? (
        <>
          <CategoryTable data={categories} />
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

export default CoursesListPage;
