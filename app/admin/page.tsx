import {
  BookOpen,
  Users,
  ListChecks,
  Layers,
  GraduationCap,
  DollarSign,
} from "lucide-react";
import { getDashboardStats, getRecentEnrollments } from "./actions";

export default async function DashboardPage() {
  const stats = await getDashboardStats();
  const recentEnrollments = await getRecentEnrollments();

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
            <p className="text-2xl font-extrabold text-blue-600">
              {stats.categoriesCount}
            </p>
          </div>
        </div>

        {/* Total Courses */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <GraduationCap size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Courses</h2>
            <p className="text-2xl font-extrabold text-blue-600">
              {stats.coursesCount}
            </p>
          </div>
        </div>

        {/* Total Lessons */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <BookOpen size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Lessons</h2>
            <p className="text-2xl font-extrabold text-blue-600">
              {stats.lessonsCount}
            </p>
          </div>
        </div>

        {/* Enrollments */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <ListChecks size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Enrollments</h2>
            <p className="text-2xl font-extrabold text-blue-600">
              {stats.enrollmentsCount}
            </p>
          </div>
        </div>

        {/* Users */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <Users size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Users</h2>
            <p className="text-2xl font-extrabold text-blue-600">
              {stats.usersCount}
            </p>
          </div>
        </div>

        {/* Revenue */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <DollarSign size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
            <p className="text-2xl font-extrabold text-blue-600">
              ${stats.revenue.toFixed(2)}
            </p>
          </div>
        </div>
      </section>

      {/* Recent Enrollments */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recent Enrollments
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {recentEnrollments.map((enrollment) => (
              <li
                key={enrollment.id}
                className="py-4 flex justify-between items-center"
              >
                <div>
                  <p className="text-gray-700 font-semibold">
                    {enrollment.user.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Enrolled in "{enrollment.course.title}"
                  </p>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(enrollment.createdAt).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
