import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Curriculum() {
  return (
    <div className="mb-8 border rounded-md">
      <h2 className="p-4 mb-4 text-2xl font-bold text-gray-800 bg-gray-100 border-b">
        Curriculum
      </h2>

      {[...Array(4)].map((_, index) => (
        <div className="p-4" key={index}>
          <h3 className="mb-2 text-xl font-semibold text-gray-700">
            Introduction of Digital Marketing (3 lectures)
          </h3>
          {[...Array(4)].map((_, index) => (
            <div
              className="flex items-center justify-between py-4 border-b"
              key={index}
            >
              <div className="flex items-center gap-4 left-content">
                <Button>
                  <FaPlayCircle />
                </Button>
                <div>
                  <p className="mb-1 text-lg font-semibold text-gray-600">
                    What is web design?
                  </p>
                  <span className="text-sm text-gray-500">10m 56s</span>
                </div>
              </div>
              <div className="right-content">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-full">
                  Play
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
