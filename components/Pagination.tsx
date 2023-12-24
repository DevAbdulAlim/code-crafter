"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

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
    <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
      <div>
        <span className="font-medium">
          showing {itemsPerPage} out of {totalItems} items
        </span>
      </div>
      <div className="flex items-center space-x-2">
        {currentPage > 1 && <Button onClick={handlePrevious}>Previous</Button>}

        <span className="text-slate-500">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && <Button onClick={handleNext}>Next</Button>}
      </div>
    </div>
  );
};

export default Pagination;
