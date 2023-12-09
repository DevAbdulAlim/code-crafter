import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function CourseDescription() {
  return (
    <div className="border rounded-md mb-8">
      <h2 className="text-2xl border-b bg-gray-100 text-gray-800  p-4 font-bold mb-4">
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

        <div className="grid py-4 grid-cols-1 md:grid-cols-2 gap-2">
          {[...Array(10)].map((_, index) => (
            <div className="flex" key={index}>
              <span className="mr-2 text-green-600 text-2xl">
                <IoMdCheckmarkCircle />
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
