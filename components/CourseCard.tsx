import React from "react";
import Link from "./ui/link";

interface CourseCardProps {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  discountPrice?: string; // Add discount as an optional prop
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  price,
  imageUrl,
  discountPrice,
}) => {
  // Calculate discounted price if discount is provided
  const discountedPrice = discountPrice
    ? ((100 - parseFloat(discountPrice)) / 100) * parseFloat(price)
    : null;

  return (
    <div className="bg-gray-100 rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 relative">
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <Link to={`/courses/${id}`}>{title}</Link>
        <div className="flex items-center mb-4">
          <span
            className={
              discountPrice ? "text-gray-500 line-through mr-2" : "mr-2"
            }
          >
            {price}
          </span>
          {discountPrice && (
            <span className="text-green-500 font-semibold">
              ${discountedPrice?.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
