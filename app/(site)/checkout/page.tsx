import React from "react";

const CheckoutPage: React.FC = () => {
  const course = {
    id: "1",
    title: "The Complete Digital Marketing Course",
    price: 450.0,
    discountPrice: 400.0,
    imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
  };

  const calculateSavings = (price: number, discountPrice: number) => {
    return price - discountPrice;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Course Summary Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Course Summary
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-32 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {course.title}
              </h3>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-red-500 font-bold text-lg">
                  ${course.discountPrice.toFixed(2)}
                </span>
                <del className="text-gray-500">${course.price.toFixed(2)}</del>
              </div>
            </div>
          </div>
          <p className="text-gray-600">
            Save $
            {calculateSavings(course.price, course.discountPrice).toFixed(2)} by
            purchasing this course now!
          </p>
        </div>

        {/* Checkout Form Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Checkout Details
          </h2>

          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Payment Details */}
            <div>
              <label
                htmlFor="card"
                className="block text-sm font-medium text-gray-700"
              >
                Card Details
              </label>
              <input
                type="text"
                id="card"
                name="card"
                placeholder="Card Number (e.g., 4242 4242 4242 4242)"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Expiry and CVC */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="cvc"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  placeholder="CVC"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Total Amount */}
            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <span className="text-lg font-bold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-blue-600">
                ${course.discountPrice.toFixed(2)}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
