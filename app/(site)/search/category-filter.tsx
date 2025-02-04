"use client";

import type React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Category } from "@prisma/client";
import {
  FaChevronDown,
  FaChevronRight,
  FaFolder,
  FaFolderOpen,
} from "react-icons/fa";

interface CategoryWithChildren extends Category {
  children?: CategoryWithChildren[];
}

interface CategoryFilterProps {
  categories: CategoryWithChildren[];
}

const CategoryItem: React.FC<{
  category: CategoryWithChildren;
  level: number;
}> = ({ category, level }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategories = searchParams.getAll("categories");

  const handleToggle = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategories.includes(categoryId)) {
      params.delete("categories", categoryId);
    } else {
      params.append("categories", categoryId);
    }
    router.push(`/search?${params.toString()}`);
  };

  const hasChildren = category.children && category.children.length > 0;

  return (
    <div className={`mb-2 ${level > 0 ? "ml-4" : ""}`}>
      <div className="flex items-center space-x-2">
        {hasChildren && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-500 hover:text-gray-700"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse category" : "Expand category"}
          >
            {isOpen ? (
              <FaChevronDown className="w-3 h-3" />
            ) : (
              <FaChevronRight className="w-3 h-3" />
            )}
          </button>
        )}
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedCategories.includes(category.id)}
            onChange={() => handleToggle(category.id)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="flex items-center text-gray-700">
            {hasChildren ? (
              isOpen ? (
                <FaFolderOpen className="w-4 h-4 mr-2 text-yellow-500" />
              ) : (
                <FaFolder className="w-4 h-4 mr-2 text-yellow-500" />
              )
            ) : (
              <FaFolder className="w-4 h-4 mr-2 text-blue-500" />
            )}
            {category.name}
          </span>
        </label>
      </div>
      {hasChildren && isOpen && (
        <div className="mt-2 border-l border-gray-200 pl-2">
          {category.children?.map((child) => (
            <CategoryItem key={child.id} category={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const buildCategoryTree = (categories: Category[]): CategoryWithChildren[] => {
  const categoryMap: Record<string, CategoryWithChildren> = {};

  // First pass: create CategoryWithChildren objects
  categories.forEach((category) => {
    categoryMap[category.id] = { ...category, children: [] };
  });

  // Second pass: build the tree structure
  const rootCategories: CategoryWithChildren[] = [];
  categories.forEach((category) => {
    if (category.parentId) {
      const parent = categoryMap[category.parentId];
      if (parent) {
        parent.children!.push(categoryMap[category.id]);
      }
    } else {
      rootCategories.push(categoryMap[category.id]);
    }
  });

  return rootCategories;
};

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const rootCategories = buildCategoryTree(categories);

  return (
    <div className="space-y-2">
      {rootCategories.map((category) => (
        <CategoryItem key={category.id} category={category} level={0} />
      ))}
    </div>
  );
}
