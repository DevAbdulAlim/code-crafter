import React from "react";

interface CategoryCardProps {
  icon: React.ReactNode;
  name: string;
  slug: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, name, slug }) => {
  return (
    <a
      href={`/category/${slug}`}
      className="flex flex-col items-center justify-center p-6 text-center bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
    >
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
    </a>
  );
};

export default CategoryCard;
