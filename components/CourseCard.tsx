import type React from "react";
import Link from "next/link";
import type { Course } from "@prisma/client";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { title, price, salePrice, image, slug } = course;

  const isDiscounted = salePrice !== null && salePrice < price;

  return (
    <div className="relative bg-gradient-to-br from-blue-100 to-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform">
      {/* Course Image */}
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      {isDiscounted && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-blue-950 text-xs font-semibold px-2 py-1 rounded-md">
          Save ${(price - salePrice).toFixed(2)}!
        </div>
      )}

      {/* Course Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{title}</h3>
        <div className="flex items-center justify-between mt-4">
          {/* Price */}
          <div className="flex items-center space-x-2">
            <span
              className={`text-sm ${
                isDiscounted ? "text-gray-500 line-through" : "text-gray-800"
              }`}
            >
              ${price.toFixed(2)}
            </span>
            {isDiscounted && (
              <span className="text-blue-600 text-lg font-bold">
                ${salePrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Button */}
          <Link
            href={`/courses/${slug}`}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
