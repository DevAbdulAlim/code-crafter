import React from "react";

const Payment = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">Payment</h2>
      <div className="p-4 bg-white rounded-md shadow-md">
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <p className="text-gray-500">**** **** **** 1234</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-500">Expires 12/24</p>
          <p className="text-gray-500">CVV 123</p>
        </div>
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Update Payment Method
        </button>
      </div>
    </div>
  );
};

export default Payment;
