import React from "react";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";

const SupportSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-8 text-4xl font-extrabold">
          Need Support? We're Here to Help!
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-md shadow-md">
            <FaEnvelope className="mb-4 text-4xl text-blue-600" />
            <h3 className="mb-2 text-xl font-bold">Email Us</h3>
            <p className="text-gray-700">
              Send us an email at support@example.com
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <FaPhoneAlt className="mb-4 text-4xl text-blue-600" />
            <h3 className="mb-2 text-xl font-bold">Call Us</h3>
            <p className="text-gray-700">
              Reach out to our support team at +123 456 7890
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <FaQuestionCircle className="mb-4 text-4xl text-blue-600" />
            <h3 className="mb-2 text-xl font-bold">FAQs</h3>
            <p className="text-gray-700">
              Check our Frequently Asked Questions for quick answers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
