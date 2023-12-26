"use client";
import React, { useState } from "react";

import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="fixed z-10 flex justify-between w-full p-2 shadow bg-gray-50">
        <div className="flex">
          <button
            type="button"
            aria-label="Menu"
            className="mx-2 mt-1 "
            onClick={toggleSidebar}
          >
            <Menu />
          </button>
          <Link href="/" className="flex items-center my-1 text-3xl">
            <p className="mt-1 ml-2 text-xl font-bold">
              <span className="text-blue-500">Code</span>
              <span className="text-teal-500">Crafter</span>
            </p>
          </Link>
        </div>

        <nav className="flex">
          <Link href="/login" className="px-4 py-2 rounded-sm ">
            Account
          </Link>
        </nav>
      </div>

      <aside
        className={`w-64 h-full   top-14 text-gray-500 z-10 fixed  transition-all  ease-in-out duration-300 ${
          isSidebarOpen ? "left-0" : "-left-64"
        }`}
      >
        <div className="h-full p-4 bg-gray-800">
          {/* Sidebar links */}
          <nav className="flex flex-col mt-5">
            <Link
              href="/admin"
              className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/categories/all"
              className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Categories
            </Link>

            <Link
              href="/admin/courses/list"
              className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Courses
            </Link>

            <Link
              href="/admin/lessons/all"
              className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Lessons
            </Link>

            <Link
              href="/admin/content"
              className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Content
            </Link>

            <Link
              href="/admin/enrollments"
              className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Enrollments
            </Link>

            <Link
              href="/admin/users"
              className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Users
            </Link>
          </nav>
        </div>
      </aside>

      <div
        className={`min-h-full  transition-margin ease-in-out duration-300 ${
          isSidebarOpen ? "ml-64" : ""
        }`}
      ></div>
    </>
  );
};

export default Navbar;
