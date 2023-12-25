import prisma from "@/config/prisma";
import Pagination from "@/components/Pagination";
import Table from "@/components/admin/categories/table";
import Search from "@/components/search";
import { Prisma } from "@prisma/client";
import Sort from "@/components/admin/categories/sort";
import ButtonLink from "@/components/ui/buttonLink";
import { PlusIcon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumb";
import { getAllCategories } from "@/lib/actions/categoryActions";

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

  const [categories, totalItems] = foundedCategories.data;

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

        <ButtonLink href="/admin/categories/create">
          <span className="hidden md:block">Create Category</span>
          <PlusIcon className="md:ml-4" />
        </ButtonLink>
      </div>

      <div className="flex items-center justify-between my-8">
        <Search placeholder={query} />
        <Sort />
      </div>

      <Table data={categories} />

      <Pagination
        totalItems={totalItems as number}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CoursesListPage;
