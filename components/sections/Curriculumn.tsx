import React from "react";

export default function Curriculumn() {
  return (
    <div className="border p-4 my-4">
      <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>

      {[...Array(4)].map((_, index) => (
        <div className="module" key={index}>
          <h3 className="text-lg font-semibold mb-2">
            Introduction of Digital Marketing (3 lectures)
          </h3>
          {[...Array(4)].map((_, index) => (
            <div
              className="lecture flex justify-between items-center"
              key={index}
            >
              <div className="left-content">
                <span className="text-sm text-gray-500">Introduction</span>
                <span className="ml-2">10m 56s</span>
              </div>
              <div className="right-content">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
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
