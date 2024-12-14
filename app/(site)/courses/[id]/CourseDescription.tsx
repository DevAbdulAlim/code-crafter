import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function CourseDescription() {
  return (
    <div className="mb-8 border rounded-lg bg-white shadow-md">
      <h2 className="p-4 text-2xl font-bold text-gray-800 bg-blue-50 border-b">
        Course Description
      </h2>
      <div className="p-6">
        {/* Introduction Paragraph */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to the Digital Marketing Ultimate Course Bundle - 12 Courses
          in 1 (Over 36 hours of content)! In this practical hands-on training,
          you’re going to learn to become a digital marketing expert with this
          ultimate course bundle that includes 12 digital marketing courses in
          1! If you wish to find out the skills that should be covered in a
          basic digital marketing course syllabus in India or anywhere around
          the world, then reading this blog will help. Before we delve into the
          advanced digital marketing course syllabus, let’s look at the scope of
          digital marketing and what the future holds.
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2">
          {[...Array(10)].map((_, index) => (
            <div className="flex items-center" key={index}>
              <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mr-3">
                <AiOutlineCheckCircle className="text-green-600 text-xl" />
              </div>
              <span className="text-gray-800">
                Digital marketing course introduction
              </span>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-700 leading-relaxed">
          As it so contrasted oh estimating instrument. Size like body some one
          had. Are conduct viewing boy minutes warrant the expense? Tolerably
          behavior may admit daughters offending her ask own. Praise effect
          wishes change way and any wanted. Lively use looked latter regard had.
          Do he it part more last in.
        </p>
      </div>
    </div>
  );
}
