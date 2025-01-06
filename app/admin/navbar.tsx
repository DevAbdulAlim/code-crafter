"use client";

import React, { useState } from "react";
import {
  Menu,
  Grid,
  Layers,
  BookOpen,
  FileText,
  Users,
  ListChecks,
  User,
  LogOut,
} from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: Grid },
  { href: "/admin/categories/all", label: "Categories", icon: Layers },
  { href: "/admin/courses/all", label: "Courses", icon: BookOpen },
  { href: "/admin/lessons/all", label: "Lessons", icon: FileText },
  { href: "/admin/contents/all", label: "Content", icon: ListChecks },
  { href: "/admin/enrollments/all", label: "Enrollments", icon: Users },
  { href: "/admin/users/all", label: "Users", icon: Users },
];

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed z-20 flex justify-between w-full p-4 shadow bg-white border-b border-gray-200">
        <div className="flex items-center">
          <button
            type="button"
            aria-label="Menu"
            className="mr-4 text-gray-600 hover:text-blue-500 transition"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>
          <Link href="/" className="flex items-center">
            <p className="ml-2 text-2xl font-bold">
              <span className="text-blue-500">Code</span>
              <span className="text-teal-500">Crafter</span>
            </p>
          </Link>
        </div>

        <nav>
          <Link
            href="/admin/profile"
            className="flex items-center rounded-full p-2 text-white bg-blue-500 hover:bg-blue-600 transition"
          >
            <User size={20} />
          </Link>
        </nav>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-64 h-[calc(100vh-56px)] overflow-auto fixed top-14 z-10 transition-all ease-in-out duration-300 bg-blue-800 ${
          isSidebarOpen ? "left-0" : "-left-64"
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            {/* Sidebar Links */}
            <nav className="flex flex-col mt-5 space-y-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center px-4 py-3 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  <link.icon size={20} className="mr-3" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Logout Button */}
          <div className="p-4">
            <button className="w-full flex mb-4 items-center justify-center px-4 py-3 text-gray-600 hover:text-white bg-white rounded-lg hover:bg-red-600 transition">
              <LogOut size={20} className="mr-3" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      <div
        className={`min-h-full transition-margin ease-in-out duration-300 ${
          isSidebarOpen ? "ml-64" : ""
        }`}
      ></div>
    </>
  );
};

export default Navbar;
