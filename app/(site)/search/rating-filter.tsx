"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FaStar } from "react-icons/fa";

export default function RatingFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentRating = Number.parseInt(searchParams.get("ratings") || "0", 10);

  const handleRatingClick = (rating: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (currentRating === rating) {
      params.delete("ratings");
    } else {
      params.set("ratings", rating.toString());
    }
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="flex flex-col space-y-2">
      {[5, 4, 3, 2, 1].map((rating) => (
        <div
          key={rating}
          className="flex items-center cursor-pointer"
          onClick={() => handleRatingClick(rating)}
        >
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`w-5 h-5 ${
                index < rating
                  ? currentRating >= rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                  : "text-gray-200"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">& Up</span>
        </div>
      ))}
    </div>
  );
}
