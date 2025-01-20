import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Dummy purchased course data for demonstration
const purchasedCourses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript to build dynamic websites.",
    completedLessons: 18,
    totalLessons: 24,
    purchasedDate: "2023-10-01",
    enrollmentStatus: "In Progress",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Advanced React",
    description:
      "Master advanced React concepts like hooks, context, and performance optimization.",
    completedLessons: 12,
    totalLessons: 30,
    purchasedDate: "2023-11-15",
    enrollmentStatus: "In Progress",
    isCompleted: false,
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description:
      "Understand the essential principles of designing user-friendly interfaces and experiences.",
    completedLessons: 28,
    totalLessons: 28,
    purchasedDate: "2023-06-20",
    enrollmentStatus: "Completed",
    isCompleted: true,
  },
  {
    id: 4,
    title: "Data Science with Python",
    description:
      "Learn data analysis and visualization using Python and its libraries.",
    completedLessons: 8,
    totalLessons: 40,
    purchasedDate: "2023-09-10",
    enrollmentStatus: "In Progress",
    isCompleted: false,
  },
];

export default function PurchasedCourseList() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex space-x-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full sm:w-72 px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="flex space-x-4">
          <select className="px-4 py-2 border rounded-lg">
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>

      {/* Card-Based Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {purchasedCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col"
          >
            <div className="mb-4">
              <Link
                href={`/courses/${course.id}`}
                className="font-medium text-blue-600 hover:underline text-xl"
              >
                {course.title}
              </Link>
              <p className="text-sm text-gray-500">{course.description}</p>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-gray-700">
                {course.completedLessons} / {course.totalLessons}
              </span>
              <span
                className={`inline-flex items-center px-3 py-1 whitespace-nowrap rounded-full text-sm font-medium ${
                  course.isCompleted
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {course.isCompleted ? "Completed" : "In Progress"}
              </span>
            </div>
            <div className="flex space-x-4 mt-auto">
              <Link
                href="my-courses/slug"
                className={`flex items-center justify-center w-full sm:w-auto px-6 py-2 text-sm font-semibold text-white ${
                  course.isCompleted
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } rounded-md shadow-sm transition-colors`}
              >
                <FaArrowRight className="mr-2 text-lg" />
                {course.isCompleted ? "Review" : "Continue"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
