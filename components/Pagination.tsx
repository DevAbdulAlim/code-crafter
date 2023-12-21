"use client";
import { useRouter } from "next/navigation";
import SecondaryButton from "./Buttons/SecondaryButton";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  totalPages,
  currentPage,
}) => {
  const router = useRouter();

  const handlePrevious = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", (Number(currentPage) - 1).toString());
    router.push(url.toString());
  };

  const handleNext = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", (Number(currentPage) + 1).toString());
    router.push(url.toString());
  };

  return (
    <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
      <div>
        <span className="font-medium">
          showing {itemsPerPage} out of {totalItems} items
        </span>
      </div>
      <div className="flex items-center space-x-2">
        {currentPage > 1 && (
          <SecondaryButton onClick={handlePrevious}>Previous</SecondaryButton>
        )}

        <span className="text-blue-500">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <SecondaryButton onClick={handleNext}>Next</SecondaryButton>
        )}
      </div>
    </div>
  );
};

export default Pagination;
