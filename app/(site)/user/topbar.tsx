import React from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="rounded-md ">
      <div className="container flex items-center justify-between px-4 py-6 mx-auto">
        <div className="flex items-center">
          <img
            src="https://i.pravatar.cc/200"
            alt="Profile"
            className="w-20 h-20 mr-4 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-700">@stellafolores</p>
            <p className="text-sm text-gray-600">Full Stack Developer</p>
            <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-700 transition duration-300 hover:text-teal-500"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-700 transition duration-300 hover:text-teal-500"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-700 transition duration-300 hover:text-teal-500"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-700 transition duration-300 hover:text-teal-500"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          {/* Add more social media links/icons here */}
        </div>
      </div>
    </div>
  );
}
