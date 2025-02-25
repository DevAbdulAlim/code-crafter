import { BsFillStarFill } from "react-icons/bs";
import { FaUserGraduate, FaGlobe } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";
import type { Course, Category, Review, Enrollment } from "@prisma/client";
import type { IconType } from "react-icons";

interface CourseHeaderProps {
  course: Course & {
    category: Category;
    reviews: Review[];
    enrollments: Enrollment[];
  };
}

export default function CourseHeader({ course }: CourseHeaderProps) {
  const averageRating =
    course.reviews.length > 0
      ? course.reviews.reduce((acc, review) => acc + review.rating, 0) /
        course.reviews.length
      : 0;

  return (
    <div className="mb-8">
      <h3 className="py-2 px-4 w-48 text-center bg-red-50 text-red-500 font-semibold rounded-full">
        {course.category.name}
      </h3>
      <h1 className="text-4xl my-6 font-bold text-gray-800 leading-snug">
        {course.title}
      </h1>
      <p className="text-lg text-gray-600 mb-6">{course.description}</p>
      <div className="flex flex-wrap gap-6">
        <DetailItem
          icon={BsFillStarFill}
          text={`${averageRating.toFixed(1)}/5.0`}
          bgColor="bg-yellow-100"
          textColor="text-yellow-500"
        />
        <DetailItem
          icon={FaUserGraduate}
          text={`${course.enrollments.length} Enrolled`}
          bgColor="bg-blue-100"
          textColor="text-blue-500"
        />
        <DetailItem
          icon={AiFillSignal}
          text={course.level}
          bgColor="bg-green-100"
          textColor="text-green-500"
        />
        <DetailItem
          icon={MdAccessTimeFilled}
          text={`Duration: ${course.duration}`}
          bgColor="bg-red-100"
          textColor="text-red-500"
        />
        <DetailItem
          icon={FaGlobe}
          text={course.language}
          bgColor="bg-purple-100"
          textColor="text-purple-500"
        />
      </div>
    </div>
  );
}

interface DetailItemProps {
  icon: IconType;
  text: string;
  bgColor: string;
  textColor: string;
}

function DetailItem({ icon: Icon, text, bgColor, textColor }: DetailItemProps) {
  return (
    <div className="flex items-center space-x-3">
      <div
        className={`flex items-center justify-center w-10 h-10 ${bgColor} ${textColor} rounded-full`}
      >
        <Icon className="text-xl" />
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}
