"use client";
import SelectInput from "@/components/Form/SelectInput";
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CourseSortForm() {
  const router = useRouter();

  const sortOptions = [
    "Title (Asc)",
    "Title (Desc)",
    "Date (Asc)",
    "Date (Desc)",
  ];

  const handleSubmit = (selectedSort: string) => {
    console.log(selectedSort);
    const [orderBy, sortBy] = selectedSort.split(' ').map(word => word.toLowerCase().replace(/[()]/g, ''));
    const currentUrl = new URL(window.location.href);

    // Update the 'order' value with 'desc'
    currentUrl.searchParams.set('order', orderBy);
    currentUrl.searchParams.set('sort', sortBy);

    // Use window.location.href to navigate to the same page with the updated query parameter
    router.push(currentUrl.toString())
  };


  return (
    <form>
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">Sort by:</span>
        <SelectInput sortOptions={sortOptions} onSortChange={handleSubmit} />
      </div>
    </form>
  );
}
