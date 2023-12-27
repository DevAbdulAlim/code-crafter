import Pagination from "@/components/Pagination";
import UserTable from "@/components/admin/users/UserTable";
import Search from "@/components/search";
import { Prisma } from "@prisma/client";
import ButtonLink from "@/components/ui/buttonLink";
import { PlusIcon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumb";
import { getAllUsers } from "@/lib/actions/userActions";
import NotFound from "@/components/notFound";
import UserSort from "@/components/admin/users/UserSort";

const UserListPage = async ({
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
  const whereClause: Prisma.UserWhereInput = query
    ? {
        OR: [{ name: { contains: query, mode: "insensitive" } }],
      }
    : {};

  const foundedUsers = await getAllUsers(
    skipAmount,
    itemsPerPage,
    orderByField,
    whereClause
  );

  const [users = [], totalItems = 0] = foundedUsers?.data ?? [];

  const totalPages = Math.ceil((totalItems as number) / itemsPerPage);
  console.log(users);

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Users",
              href: "/admin/users/all",
              active: true,
            },
          ]}
        />

        <ButtonLink href="/admin/users/create">
          <span className="hidden md:block">Create User</span>
          <PlusIcon className="md:ml-4" />
        </ButtonLink>
      </div>

      <div className="flex items-center justify-between my-8">
        <Search placeholder={query} />
        <UserSort />
      </div>

      {Array.isArray(users) && users.length > 0 ? (
        <>
          <UserTable data={users} />
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

export default UserListPage;
