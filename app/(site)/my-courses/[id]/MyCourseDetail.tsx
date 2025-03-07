"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import type { Enrollment, Course, Lesson, Content } from "@prisma/client";

type EnrollmentWithCourse = Enrollment & {
  course: Course & {
    lessons: (Lesson & {
      content: Content[];
    })[];
  };
};

interface MyCourseDetailProps {
  enrollment: EnrollmentWithCourse;
}

export default function MyCourseDetail({ enrollment }: MyCourseDetailProps) {
  const [selectedLesson, setSelectedLesson] = useState(
    enrollment.course.lessons[0]
  );

  const getLessonStatus = (lesson: Lesson) => {
    const lessonIndex = enrollment.course.lessons.findIndex(
      (l) => l.id === lesson.id
    );
    const progress = Number(enrollment.progress) || 0;
    const lessonProgress = (lessonIndex + 1) / enrollment.course.lessons.length;

    if (lessonProgress <= progress) return "Completed";
    if (
      lessonProgress > progress &&
      lessonIndex === Math.floor(progress * enrollment.course.lessons.length)
    )
      return "In Progress";
    return "Upcoming";
  };

  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-4xl font-semibold text-center mb-12 text-gray-900">
        {enrollment.course.title}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Lessons</h2>
          <ul className="space-y-4">
            {enrollment.course.lessons.map((lesson) => {
              const status = getLessonStatus(lesson);
              return (
                <li
                  key={lesson.id}
                  onClick={() => setSelectedLesson(lesson)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                    status === "Completed"
                      ? "bg-green-100 hover:bg-green-200"
                      : status === "In Progress"
                      ? "bg-yellow-100 hover:bg-yellow-200"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-gray-800 font-medium">
                    {lesson.title}
                  </span>
                  <span
                    className={`text-sm rounded px-2 py-1 ${
                      status === "Completed"
                        ? "bg-green-500 text-white"
                        : status === "In Progress"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-400 text-white"
                    }`}
                  >
                    {status}
                  </span>
                </li>
              );
            })}
          </ul>
        </aside>

        <main className="flex-1 bg-white shadow-md rounded-lg p-8">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Video Placeholder"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
                <FaPlay className="text-white text-3xl" />
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {selectedLesson.title}
          </h2>
          <p className="text-gray-700 mb-4">
            {selectedLesson.content[0]?.content ||
              "No content available for this lesson."}
          </p>
          <p className="text-sm text-gray-500">
            Duration: {selectedLesson.content[0]?.duration || "N/A"} minutes
          </p>
        </main>
      </div>
    </div>
  );
}
