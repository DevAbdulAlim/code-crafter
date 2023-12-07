import React from "react";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { IoIosGlobe, IoMdCheckmarkCircle, IoMdTime } from "react-icons/io";
import Curriculumn from "@/components/sections/Curriculumn";
import CourseOverview from "@/components/sections/CourseOverview";
const CourseDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          {/* Top */}
          <div>
            <h3 className="py-2 px-4 w-40 bg-blue-600 text-white rounded-md">
              Digital Marketing
            </h3>
            <h1 className="text-5xl my-4 font-bold text-gray-700">
              The Complete Digital Marketing Course - 12 Courses in 1
            </h1>
            <p className="text-gray-500">
              Satisfied conveying a dependent contented he gentleman agreeable
              do be. Warrant private blushes removed an in equally totally if.
              Delivered dejection necessary objection do Mr prevailed. Mr
              feeling does chiefly cordial in do.
            </p>
            <ul className="flex space-x-4">
              <li className="flex items-center">
                <AiFillStar className="mr-2" />
                <span>4.5/5.0</span>
              </li>
              <li className="flex items-center">
                <AiOutlineUser className="mr-2" />
                <span>12k Enrolled</span>
              </li>
              <li className="flex items-center">
                <IoIosGlobe className="mr-2" />
                <span>All Levels</span>
              </li>
              <li className="flex items-center">
                <IoMdTime className="mr-2" />
                <span>Last updated 09/2021</span>
              </li>
              <li className="flex items-center">
                <IoIosGlobe className="mr-2" />
                <span>English</span>
              </li>
            </ul>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-4xl font-semibold text-gray-700">
              Course description
            </h2>
            <p>
              Welcome to the Digital Marketing Ultimate Course Bundle - 12
              Courses in 1 (Over 36 hours of content) In this practical hands-on
              training, you’re going to learn to become a digital marketing
              expert with this ultimate course bundle that includes 12 digital
              marketing courses in 1! If you wish to find out the skills that
              should be covered in a basic digital marketing course syllabus in
              India or anywhere around the world, then reading this blog will
              help. Before we delve into the advanced digital marketing course
              syllabus, let’s look at the scope of digital marketing and what
              the future holds.
            </p>

            <div className="grid py-4 grid-cols-1 md:grid-cols-2 gap-2">
              {[...Array(10)].map((_, index) => (
                <div className="flex" key={index}>
                  <span className="mr-2 text-green-600 text-2xl">
                    <IoMdCheckmarkCircle />
                  </span>
                  Digital marketing course introduction
                </div>
              ))}
            </div>

            <p>
              As it so contrasted oh estimating instrument. Size like body some
              one had. Are conduct viewing boy minutes warrant the expense?
              Tolerably behavior may admit daughters offending her ask own.
              Praise effect wishes change way and any wanted. Lively use looked
              latter regard had. Do he it part more last in.
            </p>
          </div>

          {/* Currriculumn */}
          <Curriculumn />

          {/* faq */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="faq-item bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">
                What will I learn in this digital marketing course?
              </h4>
              <p>
                Our course covers various topics, including customer life cycle,
                SEO, Facebook ADS, Messenger Chatbot, SEO tools, URL structure,
                featured snippet, SEO tips and tricks, and Google tag manager.
              </p>
            </div>

            <div className="faq-item bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">
                Why is SEO important?
              </h4>
              <p>
                SEO (Search Engine Optimization) is crucial for improving a
                website's visibility on search engines, driving organic traffic,
                and enhancing online presence. It helps businesses reach their
                target audience effectively.
              </p>
            </div>

            <div className="faq-item bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">
                How can I benefit from Facebook ADS?
              </h4>
              <p>
                Facebook ADS provide a powerful platform for targeted
                advertising, allowing you to reach specific demographics and
                increase brand awareness. You'll learn practical strategies to
                leverage Facebook ADS for business growth.
              </p>
            </div>

            <div className="faq-item bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">
                What tools are covered in the SEO section?
              </h4>
              <p>
                We explore a variety of SEO tools to analyze, optimize, and
                track website performance. Some of the tools covered include
                Google Analytics, SEMrush, Moz, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <CourseOverview />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
