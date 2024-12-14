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
    <section className="relative z-10 px-3 py-20 text-white bg-blue-100">
      <div className="mx-auto text-center max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="flex flex-col items-center lg:-mt-44 p-6 bg-white text-gray-800 rounded-lg"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                {fact.icon}
              </div>
              <div className="text-3xl font-extrabold text-blue-900">
                {fact.value}
              </div>
              <div className="mt-2 text-lg font-medium">{fact.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
