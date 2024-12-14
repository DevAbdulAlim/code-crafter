"use client";

import { useEffect, useRef, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
}

export default function CategoryDropdown({
  categories,
}: {
  categories: Category[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative hidden md:block" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        type="button"
        id="options-menu"
        className="flex items-center gap-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:ring focus:ring-blue-300"
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-label="Category"
      >
        <BiSolidCategory className="text-2xl" />
        <span className="font-medium">Categories</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white text-gray-800 shadow-lg rounded-lg z-30">
          <ul className="py-2">
            {categories.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/courses?categories=${item.id}`}
                  className="block px-4 py-2 text-sm font-medium hover:bg-blue-50 hover:text-blue-700 rounded-md"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
