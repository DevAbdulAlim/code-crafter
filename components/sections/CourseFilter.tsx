"use client";
import Checkbox from "../Form/Checkbox";

const categories = [
  "Technology",
  "Science",
  "Business",
  "Entertainment",
  "Fitness",
  "Leisure",
  "Cooking",
  "Books",
  "History",
  "Development",
];
const levels = ["Beginner", "Intermediate", "Advance"];
const ratings = ["5", "4", "3", "2", "1"];

export default function CourseFilter() {
  const handleCheckboxChange = (value: boolean) => {
    console.log(value);
  };
  return (
    <div className="shadow-md h-full p-5 bg-white">
      <h2 className="text 2xl mb-4 font-bold text-gray-700">Filter</h2>
      <hr className="mb-4" />
      <h3 className="mb-4 text-sm font-semibold text-gray-500"> CATEGORY</h3>
      <form>
        {categories.map((category, index) => (
          <Checkbox
            key={index}
            label={category}
            onChange={handleCheckboxChange}
          />
        ))}
      </form>
      <hr className="mb-4" />
      <h3 className="mb-4 text-sm font-semibold text-gray-500">RATINGS</h3>
      <form>
        {ratings.map((rating, index) => (
          <Checkbox
            key={index}
            label={rating}
            onChange={handleCheckboxChange}
          />
        ))}
      </form>
      <hr className="mb-4" />
      <h3 className="mb-4 text-sm font-semibold text-gray-500">SKILL LEVEL</h3>
      <form>
        {levels.map((level, index) => (
          <Checkbox key={index} label={level} onChange={handleCheckboxChange} />
        ))}
      </form>
    </div>
  );
}
