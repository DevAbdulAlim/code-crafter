"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { Enrollment, Course, Lesson, Content } from "@prisma/client";

type EnrollmentWithCourse = Enrollment & {
  course: Course & {
    lessons: (Lesson & {
      content: Content[];
    })[];
  };
};

interface PurchasedCourseListProps {
  courses: EnrollmentWithCourse[];
}

export default function PurchasedCourseList({
  courses,
}: PurchasedCourseListProps) {
  return (
    <>
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
        {courses.map((enrollment) => {
          const course = enrollment.course;
          const totalLessons = course.lessons.reduce(
            (acc, lesson) => acc + lesson.content.length,
            0
          );
          const completedLessons = enrollment.progress
            ? Math.floor(Number(enrollment.progress) * totalLessons)
            : 0;
          const isCompleted = enrollment.status === "COMPLETED";

          return (
            <div
              key={enrollment.id}
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
                  {completedLessons} / {totalLessons}
                </span>
                <span
                  className={`inline-flex items-center px-3 py-1 whitespace-nowrap rounded-full text-sm font-medium ${
                    isCompleted
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {isCompleted ? "Completed" : "In Progress"}
                </span>
              </div>
              <div className="flex space-x-4 mt-auto">
                <Link
                  href={`/my-courses/${course.id}`}
                  className={`flex items-center justify-center w-full sm:w-auto px-6 py-2 text-sm font-semibold text-white ${
                    isCompleted
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  } rounded-md shadow-sm transition-colors`}
                >
                  <FaArrowRight className="mr-2 text-lg" />
                  {isCompleted ? "Review" : "Continue"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
