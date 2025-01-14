import { MdAccountCircle } from "react-icons/md";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignOut from "./signOut";
import Link from "next/link";

export default async function Account() {
  const session = await getServerSession(authOptions);
  return (
    <div className="relative hidden md:block group">
      {/* User Account Link */}
      <Link
        href="/user"
        className="flex items-center text-white justify-center py-3 px-5 rounded-lg"
      >
        <span className="mr-2 text-2xl">
          <MdAccountCircle />
        </span>
        <span className="text-lg font-semibold">{session?.user?.name}</span>
      </Link>

      {/* Dropdown Menu */}
      <ul className="absolute right-0 z-50 hidden p-4 space-y-2 text-gray-700 bg-white rounded-lg shadow-lg group-hover:block w-60">
        {[
          { title: "Dashboard", link: "/dashboard" },
          { title: "My Courses", link: "/my-courses" },
          { title: "Subscriptions", link: "/subscriptions" },
          { title: "Settings", link: "/settings" },
        ].map((item, index) => (
          <li
            key={index}
            className="hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            <Link
              href={item.link}
              className="block py-2 px-3 text-base font-medium text-gray-800 hover:text-blue-600 transition-all"
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li className="border-t border-gray-200 mt-2 pt-2">
          <SignOut />
        </li>
      </ul>
    </div>
  );
}
