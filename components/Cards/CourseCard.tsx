import React from 'react';

interface CourseCardProps {
  title: string;
  price: string;
  imageUrl: string;
  discountPrice?: string; // Add discount as an optional prop
}

const CourseCard: React.FC<CourseCardProps> = ({ title, price, imageUrl, discountPrice }) => {
  // Calculate discounted price if discount is provided
  const discountedPrice = discountPrice
    ? ((100 - parseFloat(discountPrice)) / 100) * parseFloat(price)
    : null;

  return (
    <div className="bg-gray-100 rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 relative">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      {discountPrice && (
        <div className="absolute top-0 right-0 p-2 bg-green-500 text-white rounded-tl-md">
          <p>${price} <del className='ms-4 '>${discountedPrice?.toFixed(2)}</del></p>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="flex items-center mb-4">
          <span className={discountPrice ? 'text-gray-500 line-through mr-2' : 'mr-2'}>
            ${price}
          </span>
          {discountPrice && (
            <span className="text-green-500 font-semibold">${discountedPrice?.toFixed(2)}</span>
          )}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
