import Pagination from "@/components/Pagination";
import ContentTable from "@/components/admin/contents/ContentTable";
import Search from "@/components/search";
import { Prisma } from "@prisma/client";
import ContentSort from "@/components/admin/contents/ContentSort";
import { PlusIcon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumb";
import { getAllContents } from "@/lib/actions/contentActions";
import NotFound from "@/components/notFound";
import Link from "@/components/ui/link";

const ContentListPage = async ({
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
  const whereClause: Prisma.ContentWhereInput = query
    ? {
        OR: [{ title: { contains: query, mode: "insensitive" } }],
      }
    : {};

  const foundedContents = await getAllContents(
    skipAmount,
    itemsPerPage,
    orderByField,
    whereClause
  );

  const [contents = [], totalItems = 0] = foundedContents?.data ?? [];

  const totalPages = Math.ceil((totalItems as number) / itemsPerPage);
  console.log(contents);

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Contents",
              href: "/admin/contents/all",
              active: true,
            },
          ]}
        />

        <Link to="/admin/contents/create">
          <span className="hidden md:block">Create Content</span>
          <PlusIcon className="md:ml-4" />
        </Link>
      </div>

      <div className="flex items-center justify-between my-8">
        <Search placeholder={query} />
        <ContentSort />
      </div>

      {Array.isArray(contents) && contents.length > 0 ? (
        <>
          <ContentTable data={contents} />
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

export default ContentListPage;
