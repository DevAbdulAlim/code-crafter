"use client";

import { useState, useRef, useEffect } from "react";
import { BiSolidCategory } from "react-icons/bi";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  parentId: string | null;
}

export default function CategoryDropdown({
  categories,
}: {
  categories: Category[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const getSubcategories = (parentId: string | null) => {
    return categories.filter((category) => category.parentId === parentId);
  };

  const renderCategory = (category: Category, level: number) => {
    const subcategories = getSubcategories(category.id);

    return (
      <div key={category.id} className="space-y-2">
        <div
          className="text-sm font-medium cursor-pointer hover:text-blue-700"
          onMouseEnter={() => setActiveCategory(category)}
        >
          {category.name}
        </div>

        {subcategories.length > 0 && level < 3 && (
          <div className="space-y-2 pl-4">
            {subcategories.map((subcategory) =>
              renderCategory(subcategory, level + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  const closeDropdown = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void
  ) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, [ref]);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative hidden md:block" ref={dropdownRef}>
      <button
        type="button"
        id="options-menu"
        aria-haspopup="listbox"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="category-list"
        className="flex items-center gap-2 p-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 focus:ring focus:ring-blue-300"
        onClick={toggleDropdown}
      >
        <BiSolidCategory className="text-2xl" />
        <span className="font-medium">Categories</span>
      </button>

      {isOpen && (
        <div
          id="category-list"
          className="absolute left-0 mt-2 w-[800px] h-[70vh] overflow-y-auto bg-white text-gray-800 shadow-lg rounded-lg z-30"
        >
          <div className="py-4 px-4 grid grid-cols-3 gap-6">
            {getSubcategories(null).map((category) => (
              <div
                key={category.id}
                className="hover:bg-blue-50 p-2 rounded-md"
              >
                <div
                  className="text-lg font-semibold cursor-pointer text-gray-900 hover:text-blue-700"
                  onMouseEnter={() => setActiveCategory(category)}
                >
                  {category.name}
                </div>
                {getSubcategories(category.id).length > 0 && (
                  <div className="pl-4 mt-2">
                    {getSubcategories(category.id).map((subcategory) =>
                      renderCategory(subcategory, 2)
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
