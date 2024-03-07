import React from "react";
import { MdAccountCircle } from "react-icons/md";
import Link from "../ui/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Button } from "../ui/button";

export default async function Account() {
  const session = await getServerSession(authOptions);
  return (
    <div className="relative hidden md:block group">
      <Link
        to="/user"
        className="inline-flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white"
      >
        <span className="mr-1 text-2xl">
          <MdAccountCircle />
        </span>
        {session?.user?.name}
      </Link>
      <ul className="absolute right-0 z-50 hidden space-y-2 text-gray-600 bg-white rounded-sm shadow-lg group-hover:block">
        {[
          { title: "Orders", link: "/orders" },
          { title: "Settings", link: "settings" },
          { title: "Address", link: "/address" },
          { title: "Payment Methods", link: "/payment-methods" },
          { title: "Notification", link: "/notification" },
        ].map((item, index) => (
          <li key={index}>
            <Link variant="info" to={item.link}>
              {item.title}
            </Link>
          </li>
        ))}
        <Button variant="link">Logout</Button>
      </ul>
    </div>
  );
}
