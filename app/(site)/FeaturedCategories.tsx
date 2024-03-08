import Link from "@/components/ui/link";
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
    <section className="px-3 pt-4 pb-16 bg-blue-100">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {featuredCategories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="flex items-center justify-center p-5 space-x-4 bg-white rounded-md"
            >
              <span className="text-xl"> {category.icon}</span>
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
