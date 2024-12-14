import React from "react";
import CategoryCard from "@/components/CategoryCard";
import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaPaintBrush,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

const FeaturedCategories = () => {
  const categories = [
    {
      icon: <FaCode className="text-blue-600 text-3xl" />,
      name: "Web Development",
      slug: "web-development",
    },
    {
      icon: <FaDatabase className="text-blue-600 text-3xl" />,
      name: "Data Science",
      slug: "data-science",
    },
    {
      icon: <FaMobileAlt className="text-blue-600 text-3xl" />,
      name: "Mobile App Development",
      slug: "mobile-app-development",
    },
    {
      icon: <FaPaintBrush className="text-blue-600 text-3xl" />,
      name: "UI/UX Design",
      slug: "ui-ux-design",
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
      name: "Cybersecurity",
      slug: "cybersecurity",
    },
    {
      icon: <FaCloud className="text-blue-600 text-3xl" />,
      name: "Cloud Computing",
      slug: "cloud-computing",
    },
    {
      icon: <FaLightbulb className="text-blue-600 text-3xl" />,
      name: "AI & Machine Learning",
      slug: "ai-machine-learning",
    },
    {
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      name: "Business Analytics",
      slug: "business-analytics",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Featured Categories
          </h2>
          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover diverse categories that can help you build skills and
            achieve your goals.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
