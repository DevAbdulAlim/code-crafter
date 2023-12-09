import React from "react";
import IconButton from "../Buttons/IconButton";
import { FaPlayCircle } from "react-icons/fa";

export default function Curriculum() {
  return (
    <div className="border mb-8 rounded-md">
      <h2 className="text-2xl bg-gray-100 text-gray-800 border-b p-4 font-bold mb-4">
        Curriculum
      </h2>

      {[...Array(4)].map((_, index) => (
        <div className="p-4" key={index}>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Introduction of Digital Marketing (3 lectures)
          </h3>
          {[...Array(4)].map((_, index) => (
            <div
              className="py-4  border-b flex justify-between items-center"
              key={index}
            >
              <div className="left-content flex items-center gap-4">
                <IconButton>
                  <FaPlayCircle />
                </IconButton>
                <div>
                  <p className="text-lg text-gray-600 font-semibold mb-1">
                    What is web design?
                  </p>
                  <span className="text-sm text-gray-500">10m 56s</span>
                </div>
              </div>
              <div className="right-content">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
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
