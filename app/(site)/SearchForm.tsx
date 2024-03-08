"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Search from "../../components/Dropdowns/Search";

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <form
        action="/courses"
        className="relative items-center hidden border-2 rounded-full grow md:mx-8 md:flex"
      >
        <input
          className="w-full h-full p-2 rounded-full focus:text-blue-200 focus:outline-none focus:ring focus:ring-blue-800"
          type="text"
          name="title"
          placeholder="Search"
        />
        <button
          className="absolute text-2xl text-gray-600 right-2 top-2"
          type="submit"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </form>

      {/* Mobile Serach Button */}
      <div className="flex items-center md:hidden">
        <button
          className="text-xl top-2"
          type="submit"
          aria-label="Search"
          onClick={toggleOpen}
        >
          <FaSearch />
        </button>

        <Search isOpen={isOpen} onClick={toggleOpen} />
      </div>
    </>
  );
}
