import React from "react";
import { FaUsers, FaChartLine, FaHandsHelping, FaAward } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg">
            Empowering learners worldwide with cutting-edge courses and expert
            mentorship to achieve their goals and dreams.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              At CodeCrafter, we strive to make world-class education accessible
              to everyone, anywhere. We believe in the transformative power of
              learning and are dedicated to fostering innovation, creativity,
              and collaboration among our learners.
            </p>
            <p className="text-lg text-gray-600">
              With a commitment to excellence, we provide top-notch courses,
              hands-on projects, and real-world applications to ensure our
              learners achieve their full potential.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full mb-4">
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-2">Community</h3>
              <p className="text-sm text-gray-600">
                Building a supportive and collaborative global learning
                community.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full mb-4">
                <FaChartLine className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-2">Growth</h3>
              <p className="text-sm text-gray-600">
                Encouraging personal and professional growth through learning.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-yellow-100 text-yellow-600 rounded-full mb-4">
                <FaHandsHelping className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-2">Integrity</h3>
              <p className="text-sm text-gray-600">
                Upholding honesty and transparency in all our interactions.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 text-red-600 rounded-full mb-4">
                <FaAward className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">
                Delivering high-quality education that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <img
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-sm text-gray-600">Lead Instructor</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <p className="text-sm text-gray-600 mb-4">
                  "This platform has been a game-changer for my career. The
                  courses are well-structured, and the mentors are
                  knowledgeable."
                </p>
                <h3 className="text-lg font-bold">Jane Smith</h3>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join the CodeCrafter Community
          </h2>
          <p className="text-lg mb-6">
            Start your journey with us today and unlock your full potential.
          </p>
          <button className="px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
