import React from "react";

const Page: React.FC = () => {
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    role: "Administrator",
    lastLogin: "2024-03-09T12:00:00Z",
    activity: ["Logged in", "Updated profile", "Viewed settings"],
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-center">User Dashboard</h1>
        <div className="mb-4">
          <p className="mb-2 text-lg text-gray-700">
            Welcome back, <span className="font-semibold">{userData.name}</span>
            !
          </p>
          <p className="text-sm text-gray-500">
            Email: {userData.email} | Role: {userData.role}
          </p>
          <p className="text-sm text-gray-500">
            Last Login: {new Date(userData.lastLogin).toLocaleString()}
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-bold">Recent Activity</h2>
          <ul className="list-disc list-inside">
            {userData.activity.map((item, index) => (
              <li key={index} className="text-gray-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
