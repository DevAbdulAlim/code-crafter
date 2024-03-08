import React from "react";

const Subscriptions = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">My Subscriptions</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-semibold">Basic Plan</h3>
          <p className="text-gray-500">Active</p>
          <p className="text-lg font-semibold">$9.99</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-semibold">Premium Plan</h3>
          <p className="text-gray-500">Inactive</p>
          <p className="text-lg font-semibold">$19.99</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-semibold">Enterprise Plan</h3>
          <p className="text-gray-500">Active</p>
          <p className="text-lg font-semibold">$49.99</p>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
