import Link from "next/link";

interface CourseCardProps {
  id: string;
  title: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  slug: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  price,
  discountPrice,
  imageUrl,
  slug,
}) => {
  const isDiscounted = discountPrice !== undefined && discountPrice < price;

  return (
    <div className="relative bg-gradient-to-br from-blue-100 to-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform">
      {/* Course Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      {isDiscounted && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-blue-950 text-xs font-semibold px-2 py-1 rounded-md">
          Save ${(price - discountPrice).toFixed(2)}!
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
                ${discountPrice?.toFixed(2)}
              </span>
            )}
          </div>

          {/* Button */}
          <Link
            href={`/course/${slug}`}
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
