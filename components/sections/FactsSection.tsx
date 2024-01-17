import React from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
  FaCalendarAlt,
} from "react-icons/fa";

const facts = [
  {
    id: 1,
    title: "Courses Offered",
    value: "100+",
    icon: <FaGraduationCap className="mb-2 text-4xl" />,
  },
  {
    id: 2,
    title: "Happy Students",
    value: "10,000+",
    icon: <FaUsers className="mb-2 text-4xl" />,
  },
  {
    id: 3,
    title: "Expert Instructors",
    value: "50+",
    icon: <FaChalkboardTeacher className="mb-2 text-4xl" />,
  },
  {
    id: 4,
    title: "Years in Education",
    value: "10+",
    icon: <FaCalendarAlt className="mb-2 text-4xl" />,
  },
];

const FactsSection = () => {
  return (
    <section className="py-20 text-white bg-slate-700">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-8 text-4xl font-extrabold">Facts About Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="p-6 text-gray-600 transition-transform transform bg-white rounded-md shadow-md hover:scale-105"
            >
              <span className="flex items-center justify-center">
                {" "}
                {fact.icon}
              </span>
              <div className="mb-2 text-3xl font-bold">{fact.value}</div>
              <div className="text-gray-700">{fact.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
