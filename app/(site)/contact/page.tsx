import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Whether you have questions, feedback, or
            need assistance, our team is here to help.
          </p>
        </div>

        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <ul className="space-y-6">
              {/* Phone */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Phone</p>
                  <p className="text-gray-600">+123-456-7890</p>
                </div>
              </li>
              {/* Email */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Email</p>
                  <p className="text-gray-600">support@codecrafter.com</p>
                </div>
              </li>
              {/* Address */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Address</p>
                  <p className="text-gray-600">
                    1234 Tech Street, CodeCity, USA
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Our Location
          </h2>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086167!2d144.9537353153166!3d-37.81627944201159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779f2d4bb43342!2sCodeCrafter!5e0!3m2!1sen!2sus!4v1634832715562!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="border-0"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
