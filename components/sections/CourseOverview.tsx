import React from "react";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaCertificate,
  FaClock,
  FaLanguage,
  FaUser,
} from "react-icons/fa";
export default function CourseOverview() {
  return (
    <section>
      <div className="border p-4">
        <div className="flex my-4 justify-around">
          <span className="text-2xl text-red-500 font-bold">$450</span>
          <del className="text-2xl text-gray-500  font-bold">$500</del>
        </div>
        <button className="w-full px-6 py-3 my-4 font-sans font-semibold text-white bg-blue-500 rounded-lg">
          Enroll Now
        </button>
        <hr />
        <div className="my-4">
          <h3 className="mb-2 text-2xl text-gray-700 font-semibold">
            This course includes
          </h3>
          <div className="flex justify-between">
            <span className="flex">
              <span className=" mr-2 flex justify-center items-center">
                <FaBookOpen />
              </span>
              Lectures
            </span>
            <span>30</span>
          </div>

          <div className="flex justify-between">
            <span className="flex">
              <span className=" mr-2 flex justify-center items-center">
                <FaClock />
              </span>
              Duration
            </span>
            <span>4h 50m</span>
          </div>

          <div className="flex justify-between">
            <span className="flex">
              <span className=" mr-2 flex justify-center items-center">
                <FaUser />
              </span>
              Skills
            </span>
            <span>Beginner</span>
          </div>

          <div className="flex justify-between">
            <span className="flex">
              <span className=" mr-2 flex justify-center items-center">
                <FaLanguage />
              </span>
              Language
            </span>
            <span>English</span>
          </div>

          <div className="flex justify-between">
            <span className="flex">
              <span className=" mr-2 flex justify-center items-center">
                <FaCalendarAlt />
              </span>
              Deadline
            </span>
            <span>Nov 30, 2021</span>
          </div>

          <div className="flex justify-between">
            <span className="flex">
              <span className=" mr-2 flex justify-center items-center">
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
              className="rounded-full h-12 w-12 mr-4"
            />
            <div>
              <p className="text-xl font-semibold">Jacqueline Miller</p>
              <p className="text-gray-500">Founder Eduport company</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border p-4 mt-4">
        <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap">
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Blog
          </a>
          <a
            href="#"
            className="bg-green-500 text-white px-4 py-2 m-2 rounded-full hover:bg-green-700 transition duration-300"
          >
            Web Development
          </a>
          <a
            href="#"
            className="bg-yellow-500 text-white px-4 py-2 m-2 rounded-full hover:bg-yellow-700 transition duration-300"
          >
            SEO
          </a>
        </div>
      </div>
    </section>
  );
}
