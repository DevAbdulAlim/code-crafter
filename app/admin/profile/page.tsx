"use client";

import React, { useState, useEffect } from "react";

interface UserProfile {
  name: string;
  email: string;
  image: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Replace this mock data with actual user data from Google Sign-In
    const mockUser = {
      name: "John Doe",
      email: "johndoe@gmail.com",
      image: "https://via.placeholder.com/150", // Replace with user's profile image
    };

    // Simulate fetching user data
    setTimeout(() => {
      setUser(mockUser);
    }, 1000);
  }, []);

  return (
    <section className="bg-gray-100 text-gray-700 py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Profile</h1>
          <p className="text-lg text-gray-600 mt-4">
            Manage your account and personal details.
          </p>
        </div>

        {/* Profile Card */}
        {user ? (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center">
              <img
                src={user.image}
                alt={user.name}
                className="w-32 h-32 rounded-full shadow-md"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mt-6">
              {user.name}
            </h2>
            <p className="text-lg text-gray-600">{user.email}</p>
            <div className="mt-8">
              <button
                className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                onClick={() => {
                  // Handle sign-out
                  alert("Signing out...");
                  setUser(null);
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-600">Loading user data...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
