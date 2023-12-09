"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Search from "../Dropdowns/Search";

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <form
        action="/courses"
        className="relative grow hidden border-2 md:mx-8 rounded-full md:flex items-center"
      >
        <input
          className="h-full w-full focus:text-blue-200 rounded-full p-2 focus:outline-none focus:ring focus:ring-blue-800"
          type="text"
          name="title"
          placeholder="Search"
        />
        <button
          className="absolute right-2  top-2 text-2xl"
          type="submit"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </form>

      {/* Mobile Serach Button */}
      <div className="items-center flex md:hidden">
        <button
          className=" top-2 text-xl"
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
