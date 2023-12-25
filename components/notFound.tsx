import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <svg
        className="w-16 h-16 text-gray-500"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      <h2 className="mt-4 text-xl font-semibold text-gray-600">
        No Data Found
      </h2>
      <p className="text-gray-400">
        Sorry, but we couldn&apos;t find any data.
      </p>
    </div>
  );
};

export default NotFound;
