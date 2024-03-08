import React from "react";
import { MdAccountCircle } from "react-icons/md";
import Link from "../../components/ui/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Button } from "../../components/ui/button";
import SignOut from "./signOut";

export default async function Account() {
  const session = await getServerSession(authOptions);
  return (
    <div className="relative hidden md:block group ">
      <Link to="/user" className="flex items-center justify-center h-full">
        <span className="mr-1 text-2xl">
          <MdAccountCircle />
        </span>
        {session?.user?.name}
      </Link>
      <ul className="absolute right-0 z-50 hidden p-4 space-y-2 text-gray-600 bg-white rounded-sm shadow-lg group-hover:block">
        {[
          { title: "Dashboard", link: "/dashboard" },
          { title: "My courses", link: "/my-courses" },
          { title: "Subscriptions", link: "/subscriptions" },
          { title: "Settings", link: "/settings" },
        ].map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        <SignOut />
      </ul>
    </div>
  );
}
