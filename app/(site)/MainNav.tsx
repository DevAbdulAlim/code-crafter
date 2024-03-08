import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

import CategoryDropdown from "../../components/Dropdowns/CategoryDropdown";
import { FcDoughnutChart } from "react-icons/fc";
import SearchForm from "./SearchForm";
import prisma from "@/lib/prisma";
import Account from "./Account";

export default async function MainNav() {
  const session = await getServerSession(authOptions);
  const categories = await prisma.category.findMany();

  return (
    <nav className="flex justify-between px-6 py-2 mx-auto max-w-7xl md:py-4">
      <Link className="flex items-center my-1 text-3xl md:mr-4" href="/">
        <span className="text-4xl">
          <FcDoughnutChart />
        </span>
        <p className="ml-2 text-xl font-bold">
          <span className="text-blue-500">Code</span>
          <span className="text-teal-500">Crafter</span>
        </p>
      </Link>

      <CategoryDropdown categories={categories} />

      <SearchForm />

      {session ? <Account /> : <Link href="/api/auth/signin">Login</Link>}
    </nav>
  );
}
