import React from "react";
import { MdAccountCircle } from "react-icons/md";
import Link from "../ui/link";

export default function Account() {
  return (
    <div className="relative hidden md:block group">
      <Link to="/user">
        <span className="mr-1 text-2xl">
          <MdAccountCircle />
        </span>
        Profile
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
        <li>Logout</li>
      </ul>
    </div>
  );
}
