import Link from "next/link";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaCertificate,
  FaClock,
  FaLanguage,
  FaUser,
} from "react-icons/fa";
import type { Course, Lesson, Content } from "@prisma/client";

type CourseWithLessons = Course & {
  lessons: (Lesson & {
    content: Content[];
  })[];
};

interface CourseOverviewProps {
  course: CourseWithLessons;
}

export default function CourseOverview({ course }: CourseOverviewProps) {
  const totalLectures = course.lessons.reduce(
    (acc, lesson) => acc + lesson.content.length,
    0
  );
  const totalDuration = course.lessons.reduce(
    (acc, lesson) =>
      acc +
      lesson.content.reduce(
        (contentAcc, content) => contentAcc + (content.duration || 0),
        0
      ),
    0
  );

  const courseIncludes = [
    {
      icon: <FaBookOpen />,
      label: "Lectures",
      value: totalLectures.toString(),
    },
    {
      icon: <FaClock />,
      label: "Duration",
      value: formatDuration(totalDuration),
    },
    { icon: <FaUser />, label: "Skills", value: course.level },
    { icon: <FaLanguage />, label: "Language", value: course.language },
    {
      icon: <FaCalendarAlt />,
      label: "Deadline",
      value: course.deadline
        ? new Date(course.deadline).toLocaleDateString()
        : "No deadline",
    },
    { icon: <FaCertificate />, label: "Certificate", value: "Yes" },
  ];

  return (
    <section>
      {/* Course Price and Enroll Section */}
      <div className="p-6 bg-gradient-to-b from-blue-50 to-white shadow rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-3xl font-bold text-blue-600">
              ${course.price}
            </span>
            {course.salePrice && course.salePrice < course.price && (
              <del className="ml-3 text-lg text-gray-500">${course.price}</del>
            )}
          </div>
          <Link
            href={`/courses/${course.slug}/checkout`}
            className="px-6 py-2 bg-blue-600 text-white hover:text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Enroll Now
          </Link>
        </div>

        <hr className="my-4" />

        {/* Course Includes Section */}
        <div className="mb-6">
          <h3 className="mb-4 text-2xl font-semibold text-gray-700">
            This Course Includes
          </h3>

          <div className="space-y-4">
            {courseIncludes.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full text-blue-600 mr-3">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 text-lg">{item.label}</span>
                </div>
                <span className="text-gray-800 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}
