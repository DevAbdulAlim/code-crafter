import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const TwoColumnPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Column */}
      <div className="w-1/2 p-8 xl:p-40 flex items-center">
        <div className="max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Logo</h1>
          </div>
          {/* Get in Touch Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-gray-800">
              Get in Touch
            </h1>
            <p className="text-gray-700 mb-8 text-xl font-semibold">
              Fill in the form to the right to get in touch with someone on our
              team, and we will reach out shortly.
            </p>
            <p className="text-gray-600">
              If you are seeking support, please visit our support portal before
              reaching out directly.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <p className="text-2xl font-semibold mb-4 text-gray-800">
              Contact Information
            </p>
            <div className="flex items-start">
              <FaPhone className="text-blue-500 mt-1 mr-2" />
              <p className="text-gray-600">+0123-456-7890</p>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-blue-500 mt-1 mr-2" />
              <p className="text-gray-600">hello@geekui.com</p>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-500 mt-1 mr-2" />
              <p className="text-gray-600">
                2652 Kooter Lane, Charlotte, NC 28263
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaFacebook size={24} className="text-blue-500" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaTwitter size={24} className="text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="text-blue-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 p-8 xl:p-40 relative flex items-center">
        <div className="container z-10">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Background extending beyond the container */}
        <div className="absolute inset-0 bg-gray-200 z-0"></div>
      </div>
    </div>
  );
};

export default TwoColumnPage;
