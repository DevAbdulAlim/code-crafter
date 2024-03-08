import React from "react";

const DeleteProfile = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Delete Profile</h2>
      <div className="p-4 bg-white rounded-md shadow-md">
        <p className="mb-4 text-gray-700">
          Are you sure you want to delete your profile? This action cannot be
          undone.
        </p>
        <div className="flex justify-end">
          <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProfile;
