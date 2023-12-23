import React from "react";
import Modal from "@/components/ui/modal";

export default function Show() {
  return (
    <Modal>
      <div className="bg-white p-6">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Course Image"
          className="w-full h-40 object-cover mb-4 rounded-lg"
        />

        <div>
          <h1 className="text-2xl font-bold mb-2">Introduction to Coding</h1>
          <p className="text-gray-600 mb-4">
            Learn the basics of coding and kickstart your programming journey.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Course Overview</h2>
          <p className="text-gray-600">
            This exciting course covers fundamental coding concepts, hands-on
            projects, and expert guidance.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Instructor</h2>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Instructor"
              className="w-8 h-8 object-cover rounded-full mr-2"
            />
            <p className="text-gray-800">Prof. John Doe</p>
          </div>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">
          Enroll Now
        </button>
      </div>
    </Modal>
  );
}
