import React from "react";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaCertificate,
  FaClock,
  FaLanguage,
  FaUser,
} from "react-icons/fa";
import Link from "../../../../components/ui/link";

export default function CourseOverview() {
  return (
    <section>
      {/* Course Price and Enroll Section */}
      <div className="p-6 bg-gradient-to-b from-blue-50 to-white shadow rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-3xl font-bold text-blue-600">$450</span>
            <del className="ml-3 text-lg text-gray-500">$500</del>
          </div>
          <Link
            to="/courses/checkout"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
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
            {[
              { icon: <FaBookOpen />, label: "Lectures", value: "30" },
              { icon: <FaClock />, label: "Duration", value: "4h 50m" },
              { icon: <FaUser />, label: "Skills", value: "Beginner" },
              { icon: <FaLanguage />, label: "Language", value: "English" },
              {
                icon: <FaCalendarAlt />,
                label: "Deadline",
                value: "Nov 30, 2021",
              },
              { icon: <FaCertificate />, label: "Certificate", value: "Yes" },
            ].map((item, index) => (
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

        <hr />

        {/* Instructor Profile */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Instructor</h3>
          <div className="flex items-center">
            <img
              src="https://t4.ftcdn.net/jpg/01/42/20/17/360_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg"
              alt="Instructor Avatar"
              className="w-14 h-14 mr-4 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                Jacqueline Miller
              </p>
              <p className="text-gray-500">Founder, Eduport Company</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Tags Section */}
      <div className="p-6 mt-6 bg-gradient-to-b from-white to-blue-50 shadow rounded-lg">
        <h3 className="mb-4 text-xl font-semibold text-gray-800">
          Popular Tags
        </h3>
        <div className="flex flex-wrap">
          {[
            { label: "Blog", color: "bg-blue-500", hover: "hover:bg-blue-700" },
            {
              label: "Web Development",
              color: "bg-green-500",
              hover: "hover:bg-green-700",
            },
            {
              label: "SEO",
              color: "bg-yellow-500",
              hover: "hover:bg-yellow-700",
            },
          ].map((tag, index) => (
            <a
              key={index}
              href="#"
              className={`px-4 py-2 m-2 text-white text-sm font-medium rounded-full ${tag.color} ${tag.hover} transition duration-300`}
            >
              {tag.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
