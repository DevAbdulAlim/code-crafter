import React from "react";
import {
  BookOpen,
  Users,
  ListChecks,
  Layers,
  GraduationCap,
  DollarSign,
} from "lucide-react";

const DashboardPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Dashboard Heading */}
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your admin dashboard</p>
      </header>

      {/* Overview Section */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Total Categories */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <Layers size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
            <p className="text-2xl font-extrabold text-blue-600">12</p>
          </div>
        </div>

        {/* Total Courses */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <GraduationCap size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Courses</h2>
            <p className="text-2xl font-extrabold text-blue-600">35</p>
          </div>
        </div>

        {/* Total Lessons */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <BookOpen size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Lessons</h2>
            <p className="text-2xl font-extrabold text-blue-600">245</p>
          </div>
        </div>

        {/* Enrollments */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <ListChecks size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Enrollments</h2>
            <p className="text-2xl font-extrabold text-blue-600">1,200</p>
          </div>
        </div>

        {/* Users */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <Users size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Users</h2>
            <p className="text-2xl font-extrabold text-blue-600">550</p>
          </div>
        </div>

        {/* Revenue */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <DollarSign size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
            <p className="text-2xl font-extrabold text-blue-600">$75,000</p>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recent Activities
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <ul className="divide-y divide-gray-200">
            <li className="py-4 flex justify-between items-center">
              <p className="text-gray-700">
                New course "React for Beginners" added.
              </p>
              <span className="text-sm text-gray-500">1 hour ago</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <p className="text-gray-700">
                John Doe enrolled in "JavaScript Basics".
              </p>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <p className="text-gray-700">
                Lesson "Introduction to Node.js" updated.
              </p>
              <span className="text-sm text-gray-500">Yesterday</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
