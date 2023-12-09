"use client";
import Checkbox from "../Form/Checkbox";
import CategoryFilter from "./CategoryFilter";
import SkillFilter from "./SkillFilter";
import RatingFilter from "./RatingFilter";

const levels = ["Beginner", "Intermediate", "Advance"];
const ratings = ["5", "4", "3", "2", "1"];

export default function CourseFilter() {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    console.log();
  };
  return (
    <div className="shadow-md h-full p-5 bg-white">
      <h2 className="text 2xl mb-4 font-bold text-gray-700">Filter</h2>
      <hr className="mb-4" />
      <h3 className="mb-4 text-sm font-semibold text-gray-500"> CATEGORY</h3>
      <CategoryFilter />
      <hr className="mb-4" />
      <h3 className="mb-4 text-sm font-semibold text-gray-500">RATINGS</h3>
      <RatingFilter />
      <hr className="mb-4" />
      <h3 className="mb-4 text-sm font-semibold text-gray-500">SKILL LEVEL</h3>
      <SkillFilter />
    </div>
  );
}
