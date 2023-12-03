'use client'

import SecondaryButton from "../Buttons/SecondaryButton";
import { useTransition } from "react";
import getAllCourses from '../../app/(dashboard)/admin/courses/action';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  getAllCourses: (page:number, currentPage:number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, itemsPerPage,
    totalItems, getAllCourses }) => {
        
    let [isPending, startTransition] = useTransition()

  return (
    <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
    <div>
      <span className="font-medium">
        Showing {itemsPerPage} items per page | Total Items: {totalItems}
      </span>
    </div>
    <div className="flex items-center space-x-2">
      <SecondaryButton
        onClick={() => startTransition(() => {
           getAllCourses(currentPage - 1, itemsPerPage)
        })}
        disabled={currentPage === 1}
      >
        Previous
      </SecondaryButton>
      <span className="text-blue-500">
        Page {currentPage} of {totalPages}
      </span>
      <SecondaryButton
       onClick={() => startTransition(() => {
        console.log(itemsPerPage + 1, itemsPerPage)
        getAllCourses(currentPage + 1, itemsPerPage)
    })}
        disabled={currentPage === totalPages}
      >
        Next
      </SecondaryButton>
    </div>
  </div>
  );
};

export default Pagination;
