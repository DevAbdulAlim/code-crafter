import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

import CategoryDropdown from "../Dropdowns/CategoryDropdown";
import { FcDoughnutChart } from "react-icons/fc";
import SearchForm from "./SearchForm";
import prisma from "@/config/prisma";
import Account from "../Dropdowns/Account";

export default async function MainNav() {
  const session = await getServerSession(authOptions);
  const categories = await prisma.category.findMany();

  return (
    <nav className="flex max-w-7xl mx-auto justify-between py-2 md:py-4  px-6">
      <Link className="my-1 text-3xl flex items-center md:mr-4" href="/">
        <span className="text-4xl">
          <FcDoughnutChart />
        </span>
        <span className="ml-2 text-xl font-bold">Oxyport</span>
      </Link>

      <CategoryDropdown categories={categories} />

      <SearchForm />

      {session ? (
        <Account />
      ) : (
        <Link
          href="/login"
          className="rounded-md px-4 my-2 flex items-center justify-center font-semibold  hover:bg-blue-700 hover:text-white"
        >
          Login
        </Link>
      )}
    </nav>
  );
}
