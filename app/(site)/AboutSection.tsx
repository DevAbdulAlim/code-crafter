import { Button } from "@/components/ui/button";
import React from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaLightbulb,
  FaRegSmileBeam,
  FaHeart,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="px-3 py-20 text-gray-100 bg-gradient-to-b from-blue-500 to-blue-200">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-8 text-4xl font-extrabold">About Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
          <div>
            <p className="leading-loose ">
              Welcome to our online learning platform, where education meets
              innovation. We are dedicated to providing a transformative
              learning experience for individuals worldwide.
            </p>
            <p className="mt-4 leading-loose ">
              Our mission is to empower learners of all backgrounds to acquire
              new skills, pursue their passions, and excel in their personal and
              professional endeavors.
            </p>
            <Button>Read More</Button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*zbDLAcx-DJwahRiOOtejow.jpeg" // Replace with the actual image URL
              alt="About Us"
              className="object-cover w-full rounded-md shadow-md h-80"
            />
          </div>
        </div>
        <div className="mt-12">
          <h3 className="mb-4 text-2xl font-semibold">Our Commitments</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((commitment) => (
              <div
                key={commitment.id}
                className="p-4 text-blue-800 bg-blue-100 rounded-md"
              >
                {commitment.icon}
                <h4 className="mt-2 text-lg font-semibold">
                  {commitment.title}
                </h4>
                <p className="mt-2 text-gray-700">{commitment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const commitments = [
  {
    id: 1,
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    title: "Diverse Courses",
    text: "Provide diverse and high-quality courses for lifelong learners.",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher className="text-4xl text-green-600" />,
    title: "Expert Instructors",
    text: "Engage expert instructors passionate about teaching and knowledge sharing.",
  },
  {
    id: 3,
    icon: <FaUsers className="text-4xl text-purple-600" />,
    title: "Supportive Community",
    text: "Build a supportive community fostering collaboration and networking.",
  },
  {
    id: 4,
    icon: <FaLightbulb className="text-4xl text-yellow-600" />,
    title: "Creativity and Innovation",
    text: "Encourage creativity and innovation through interactive learning experiences.",
  },
  {
    id: 5,
    icon: <FaRegSmileBeam className="text-4xl text-pink-600" />,
    title: "Positive Learning Journey",
    text: "Ensure a positive and enjoyable learning journey for every student.",
  },
  {
    id: 6,
    icon: <FaHeart className="text-4xl text-red-600" />,
    title: "Passionate Teaching",
    text: "Deliver courses with passion and dedication to inspire our learners.",
  },
];

export default AboutSection;
