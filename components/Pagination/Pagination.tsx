"use client";

import LinkButton from "../Buttons/LinkButton";

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

  return (
    <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
      <div>
        <span className="font-medium">
          showing {itemsPerPage} out of {totalItems} items
        </span>
      </div>
      <div className="flex items-center space-x-2">
        {currentPage > 1 && (
          <LinkButton to={`/admin/courses/list?page=${Number(currentPage) - 1}`}>
            Previous
          </LinkButton>
        )}

        <span className="text-blue-500">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <LinkButton to={`/admin/courses/list?page=${Number(currentPage) + 1}`}>
            Next
          </LinkButton>
        )}
      </div>
    </div>
  );
};

export default Pagination;
