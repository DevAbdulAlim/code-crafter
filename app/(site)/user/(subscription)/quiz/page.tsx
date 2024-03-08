import React from "react";

const Quiz = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">My Quiz Attempt</h2>
      <div className="p-4 bg-white rounded-md shadow-md">
        <h3 className="mb-2 text-lg font-semibold">Quiz Title</h3>
        <p className="mb-4 text-gray-500">Date: January 31, 2024</p>
        <div className="py-4 border-t border-gray-300">
          <h3 className="mb-2 text-lg font-semibold">Results</h3>
          <p className="text-gray-500">Score: 8/10</p>
          <p className="text-gray-500">Status: Passed</p>
        </div>
        <div className="py-4 border-t border-gray-300">
          <h3 className="mb-2 text-lg font-semibold">Questions</h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">1. What is React?</p>
            <p className="text-gray-500">Correct</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">2. What is JSX?</p>
            <p className="text-gray-500">Incorrect</p>
          </div>
          {/* Add more questions and answers here */}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
