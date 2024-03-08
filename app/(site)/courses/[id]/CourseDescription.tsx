import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function CourseDescription() {
  return (
    <div className="mb-8 border rounded-md">
      <h2 className="p-4 mb-4 text-2xl font-bold text-gray-800 bg-gray-100 border-b">
        Course description
      </h2>
      <div className="p-4">
        <p>
          Welcome to the Digital Marketing Ultimate Course Bundle - 12 Courses
          in 1 (Over 36 hours of content) In this practical hands-on training,
          you’re going to learn to become a digital marketing expert with this
          ultimate course bundle that includes 12 digital marketing courses in
          1! If you wish to find out the skills that should be covered in a
          basic digital marketing course syllabus in India or anywhere around
          the world, then reading this blog will help. Before we delve into the
          advanced digital marketing course syllabus, let’s look at the scope of
          digital marketing and what the future holds.
        </p>

        <div className="grid grid-cols-1 gap-2 py-4 md:grid-cols-2">
          {[...Array(10)].map((_, index) => (
            <div className="flex items-center" key={index}>
              <span className="mr-2 text-2xl text-green-600">
                <AiOutlineCheckCircle />
              </span>
              Digital marketing course introduction
            </div>
          ))}
        </div>

        <p>
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
