import React from "react";

const Invoice = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">Invoice</h2>
      <div className="p-4 bg-white rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Invoice #123456</h3>
            <p className="text-gray-500">Date: January 31, 2024</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Amount</h3>
            <p className="text-gray-500">$99.99</p>
          </div>
        </div>
        <div className="py-4 border-t border-gray-300">
          <h3 className="mb-2 text-lg font-semibold">Billing Details</h3>
          <p className="text-gray-500">John Doe</p>
          <p className="text-gray-500">123 Street Name</p>
          <p className="text-gray-500">City, Country</p>
          <p className="text-gray-500">Email: john@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
