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
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Section Title and Subtitle */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
          <p className="text-lg text-blue-100">
            Discover our mission, values, and dedication to delivering an
            exceptional learning experience for all.
          </p>
        </div>

        {/* Introductory Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
          <div>
            <p className="text-lg leading-loose">
              Welcome to our online learning platform, where education meets
              innovation. We are dedicated to providing a transformative
              learning experience for individuals worldwide.
            </p>
            <p className="mt-4 text-lg leading-loose">
              Our mission is to empower learners of all backgrounds to acquire
              new skills, pursue their passions, and excel in their personal and
              professional endeavors.
            </p>
            <Button className="mt-6 bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg hover:bg-yellow-500">
              Read More
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*zbDLAcx-DJwahRiOOtejow.jpeg" // Replace with your image URL
              alt="About Us"
              className="object-cover rounded-lg shadow-lg w-full h-80"
            />
          </div>
        </div>

        {/* Commitments Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Our Commitments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((commitment) => (
              <div
                key={commitment.id}
                className="p-6 bg-white text-blue-900 rounded-lg shadow-md text-center"
              >
                {/* Rounded Icon */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100">
                  {commitment.icon}
                </div>
                <h4 className="text-lg font-semibold">{commitment.title}</h4>
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
    icon: <FaGraduationCap className="text-2xl text-blue-600" />,
    title: "Diverse Courses",
    text: "Provide diverse and high-quality courses for lifelong learners.",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher className="text-2xl text-green-600" />,
    title: "Expert Instructors",
    text: "Engage expert instructors passionate about teaching and knowledge sharing.",
  },
  {
    id: 3,
    icon: <FaUsers className="text-2xl text-purple-600" />,
    title: "Supportive Community",
    text: "Build a supportive community fostering collaboration and networking.",
  },
  {
    id: 4,
    icon: <FaLightbulb className="text-2xl text-yellow-600" />,
    title: "Creativity and Innovation",
    text: "Encourage creativity and innovation through interactive learning experiences.",
  },
  {
    id: 5,
    icon: <FaRegSmileBeam className="text-2xl text-pink-600" />,
    title: "Positive Learning Journey",
    text: "Ensure a positive and enjoyable learning journey for every student.",
  },
  {
    id: 6,
    icon: <FaHeart className="text-2xl text-red-600" />,
    title: "Passionate Teaching",
    text: "Deliver courses with passion and dedication to inspire our learners.",
  },
];

export default AboutSection;
