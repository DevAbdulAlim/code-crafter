import { AiFillSignal } from "react-icons/ai";
import { FaGlobe, FaUserGraduate } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";

export default function CourseIntro() {
  return (
    <div className="mb-8">
      {/* Course Category */}
      <h3 className="py-2 px-4 w-48 text-center bg-red-50 text-red-500 font-semibold rounded-full">
        Digital Marketing
      </h3>

      {/* Course Title */}
      <h1 className="text-4xl my-6 font-bold text-gray-800 leading-snug">
        The Complete Digital Marketing Course - 12 Courses in 1
      </h1>

      {/* Course Description */}
      <p className="text-lg text-gray-600 mb-6">
        Satisfied conveying a dependent contented he gentleman agreeable do be.
        Warrant private blushes removed an in equally totally if. Delivered
        dejection necessary objection do Mr prevailed. Mr feeling does chiefly
        cordial in do.
      </p>

      {/* Course Details */}
      <div className="flex flex-wrap gap-6">
        {/* Rating */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 text-yellow-500 rounded-full">
            <BsFillStarFill className="text-xl" />
          </div>
          <span className="text-gray-700 font-medium">4.5/5.0</span>
        </div>

        {/* Enrolled Students */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-500 rounded-full">
            <FaUserGraduate className="text-xl" />
          </div>
          <span className="text-gray-700 font-medium">12k Enrolled</span>
        </div>

        {/* Level */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 text-green-500 rounded-full">
            <AiFillSignal className="text-xl" />
          </div>
          <span className="text-gray-700 font-medium">All Levels</span>
        </div>

        {/* Last Updated */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-red-100 text-red-500 rounded-full">
            <MdAccessTimeFilled className="text-xl" />
          </div>
          <span className="text-gray-700 font-medium">
            Last updated 09/2021
          </span>
        </div>

        {/* Language */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-500 rounded-full">
            <FaGlobe className="text-xl" />
          </div>
          <span className="text-gray-700 font-medium">English</span>
        </div>
      </div>
    </div>
  );
}
