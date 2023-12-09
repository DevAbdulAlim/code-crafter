import React from "react";

export default function CourseNotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600">
          We couldn't find the course you're looking for.
        </p>
        <p className="text-lg text-gray-600">
          Please check the course name or try another search.
        </p>
      </div>
    </div>
  );
}
