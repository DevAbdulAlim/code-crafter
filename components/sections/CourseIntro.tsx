import { AiFillSignal } from "react-icons/ai";
import { FaGlobe, FaUserGraduate } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";

export default function CourseIntro() {
  return (
    <div className="mb-8">
      <h3 className="py-2 px-4 w-40 bg-red-100 text-gray-700  rounded-md">
        Digital Marketing
      </h3>
      <h1 className="text-4xl my-4 font-bold text-gray-800">
        The Complete Digital Marketing Course - 12 Courses in 1
      </h1>
      <p className="text-gray-600">
        Satisfied conveying a dependent contented he gentleman agreeable do be.
        Warrant private blushes removed an in equally totally if. Delivered
        dejection necessary objection do Mr prevailed. Mr feeling does chiefly
        cordial in do.
      </p>

      <div className="flex mt-2 flex-wrap space-x-4">
        <div className="flex items-center">
          <span className="font-bold text-yellow-500  mr-2">
            <BsFillStarFill />
          </span>
          <span className="text-gray-700">4.5/5.0</span>
        </div>

        <div className="flex items-center">
          <span className="font-bold  mr-2">
            <FaUserGraduate />
          </span>
          <span className="text-gray-700">12k Enrolled</span>
        </div>

        <div className="flex items-center">
          <span className="font-bold text-xl mr-2">
            <AiFillSignal />
          </span>
          <span className="text-gray-700">All Levels</span>
        </div>

        <div className="flex items-center">
          <span className="font-bold text-xl mr-2">
            <MdAccessTimeFilled />
          </span>
          <span className="text-gray-700">Last updated 09/2021</span>
        </div>

        <div className="flex items-center">
          <span className="font-bold text-xl mr-2">
            <FaGlobe />
          </span>
          <span className="text-gray-700">English</span>
        </div>
      </div>
    </div>
  );
}
