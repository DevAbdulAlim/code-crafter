// components/sections/FeaturedCategoriesSection.tsx
import React from "react";

const FeaturedCategories: React.FC = () => {
  const featuredCategories = [
    { name: "Web Development", link: "/categories/web-dev" },
    { name: "Data Science", link: "/categories/data-science" },
    { name: "Mobile App Development", link: "/categories/mobile-dev" },
    // Add more categories as needed
  ];

  return (
    <section className="bg-green-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Categories</h2>
        <div className="flex space-x-4">
          {featuredCategories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="bg-white p-4 rounded-md shadow-md hover:shadow-lg"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
