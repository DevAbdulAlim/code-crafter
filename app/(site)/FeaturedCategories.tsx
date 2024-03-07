import React from "react";
import { FaCode, FaDatabase, FaMobileAlt } from "react-icons/fa";

const FeaturedCategories: React.FC = () => {
  const featuredCategories = [
    { name: "Web Development", link: "/categories/web-dev", icon: <FaCode /> },
    {
      name: "Data Science",
      link: "/categories/data-science",
      icon: <FaDatabase />,
    },
    {
      name: "Mobile App Development",
      link: "/categories/mobile-dev",
      icon: <FaMobileAlt />,
    },
    {
      name: "Data Science",
      link: "/categories/data-science",
      icon: <FaDatabase />,
    },
    {
      name: "Mobile App Development",
      link: "/categories/mobile-dev",
      icon: <FaMobileAlt />,
    },
    // Add more categories as needed
  ];

  return (
    <section className="py-20 px-3 ">
      <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {featuredCategories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="flex items-center justify-center p-4 overflow-hidden text-gray-500 transition duration-300 bg-gray-200 rounded-lg hover:shadow-md"
            >
              {category.icon}
              <h3 className="ml-4 font-semibold">{category.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
