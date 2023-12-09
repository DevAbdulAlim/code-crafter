"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Checkbox from "../Form/Checkbox";

type CategoryType = {
  id: number;
  name: string;
};

const categories = [
  { id: 1, name: "Beginner" },
  { id: 2, name: "Intermediate" },
  { id: 3, name: "Advance" },
];

export default function SkillFilter() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [checkboxChanged, setCheckboxChanged] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = (categoryId: number) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );

    setCheckboxChanged(true);
  };

  useEffect(() => {
    if (checkboxChanged) {
      const url = new URL(window.location.href);

      // Clear existing "categories" parameters
      url.searchParams.delete("skills");

      // Add each selected category separately
      selectedCategories.forEach((categoryId) => {
        url.searchParams.append("skills", String(categoryId));
      });

      //   router.push(url.toString());
      setCheckboxChanged(false);
    }
  }, [checkboxChanged, selectedCategories, router]);

  return (
    <div>
      {categories.map((category: CategoryType) => (
        <Checkbox
          key={category.id}
          id={`skills-${category.id}`}
          label={category.name}
          checked={selectedCategories.includes(category.id)}
          onChange={() => handleCheckboxChange(category.id)}
        />
      ))}
    </div>
  );
}
