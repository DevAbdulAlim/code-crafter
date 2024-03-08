import React from "react";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaCertificate,
  FaClock,
  FaLanguage,
  FaUser,
} from "react-icons/fa";
import Link from "../ui/link";
export default function CourseOverview() {
  return (
    <section>
      <div className="p-4 border">
        <div className="flex justify-around my-4">
          <span className="text-2xl font-bold text-red-500">$450</span>
          <del className="text-2xl font-bold text-gray-500">$500</del>
        </div>
        <Link to="/courses/checkout">Enroll Now</Link>
        <hr />
        <div className="my-4">
          <h3 className="mb-2 text-2xl font-semibold text-gray-700">
            This course includes
          </h3>
          <div className="flex justify-between">
            <span className="flex">
              <span className="flex items-center justify-center mr-2 ">
                <FaBookOpen />
              </span>
              Lectures
            </span>
            <span>30</span>
          </div>

          <div className="flex justify-between">
            <span className="flex">
              <span className="flex items-center justify-center mr-2 ">
                <FaClock />
              </span>
              Duration
            </span>
            <span>4h 50m</span>
          </div>

          <div className="flex justify-between">
            <span className="flex">
              <span className="flex items-center justify-center mr-2 ">
                <FaUser />
              </span>
              Skills
            </span>
            <span>Beginner</span>
          </div>

          <div className="flex justify-between">
            <span className="flex">
              <span className="flex items-center justify-center mr-2 ">
                <FaLanguage />
              </span>
              Language
            </span>
            <span>English</span>
          </div>

          <div className="flex justify-between">
            <span className="flex">
              <span className="flex items-center justify-center mr-2 ">
                <FaCalendarAlt />
              </span>
              Deadline
            </span>
            <span>Nov 30, 2021</span>
          </div>

          <div className="flex justify-between">
            <span className="flex">
              <span className="flex items-center justify-center mr-2 ">
                <FaCertificate />
              </span>
              Certificate
            </span>
            <span>Yes</span>
          </div>
        </div>

        <hr />

        {/* Instructor Profile  */}
        <div className="mt-4">
          <div className="flex items-center">
            <img
              src="https://t4.ftcdn.net/jpg/01/42/20/17/360_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg"
              alt="Instructor Avatar"
              className="w-12 h-12 mr-4 rounded-full"
            />
            <div>
              <p className="text-xl font-semibold">Jacqueline Miller</p>
              <p className="text-gray-500">Founder Eduport company</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 mt-4 border">
        <h3 className="mb-4 text-xl font-semibold">Popular Tags</h3>
        <div className="flex flex-wrap">
          <a
            href="#"
            className="px-4 py-2 m-2 text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Blog
          </a>
          <a
            href="#"
            className="px-4 py-2 m-2 text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-700"
          >
            Web Development
          </a>
          <a
            href="#"
            className="px-4 py-2 m-2 text-white transition duration-300 bg-yellow-500 rounded-full hover:bg-yellow-700"
          >
            SEO
          </a>
        </div>
      </div>
    </section>
  );
}
