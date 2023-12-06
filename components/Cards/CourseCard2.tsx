// components/CourseCard.tsx
import React from 'react';

interface CourseCardProps {
  title: string;
  price: string;
  discountPrice?: string;
  imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, price, discountPrice, imageUrl }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-md" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          {discountPrice && (
            <p className="text-red-500 font-semibold">{discountPrice}</p>
          )}
          <p className={discountPrice ? 'text-gray-500 line-through' : 'text-blue-500 font-semibold'}>{price}</p>
        </div>
        <div className="flex justify-between items-center">
          {discountPrice && (
            <span className="text-green-500 font-semibold">Save {calculateDiscount(price, discountPrice)}%</span>
          )}
          <button className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-md text-sm transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

const calculateDiscount = (originalPrice: string, discountPrice: string): number => {
  const original = parseFloat(originalPrice.replace('$', ''));
  const discount = parseFloat(discountPrice.replace('$', ''));
  const discountPercentage = ((original - discount) / original) * 100;
  return Math.round(discountPercentage);
};

export default CourseCard;
