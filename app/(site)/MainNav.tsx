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
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <Link className="flex items-center text-3xl md:mr-4" href="/">
          <p className="ml-2 text-xl font-bold">
            <span className="text-white">CO</span>
            <span className="text-yellow-400">CRAFT</span>
          </p>
        </Link>

        {/* Categories Dropdown */}
        <div className="hidden md:block">
          <CategoryDropdown categories={categories} />
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-grow mx-6 max-w-2xl">
          <SearchForm />
        </div>

        {/* Account/Login */}
        <div>
          {session ? (
            <Account />
          ) : (
            <Link
              href="/api/auth/signin"
              className="px-4 py-2 bg-yellow-400 text-blue-950 rounded-md hover:bg-yellow-500 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
