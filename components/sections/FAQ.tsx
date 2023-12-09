import React from "react";

export default function FAQ() {
  return (
    <div className="mb-8 border rounded-md">
      <h2 className="text-2xl border-b bg-gray-100 text-gray-800  p-4 font-bold mb-4">
        Frequently Asking Questions
      </h2>

      <div className="grid grid-cols-1 m gap-4">
        <div className="faq-item bg-white p-4 ">
          <h4 className="text-xl font-semibold mb-2">
            What will I learn in this digital marketing course?
          </h4>
          <p className="text-gray-600">
            Our course covers various topics, including customer life cycle,
            SEO, Facebook ADS, Messenger Chatbot, SEO tools, URL structure,
            featured snippet, SEO tips and tricks, and Google tag manager.
          </p>
        </div>

        <div className="faq-item bg-white p-4 ">
          <h4 className="text-xl font-semibold mb-2">Why is SEO important?</h4>
          <p className="text-gray-600">
            SEO (Search Engine Optimization) is crucial for improving a
            website&apos;s visibility on search engines, driving organic
            traffic, and enhancing online presence. It helps businesses reach
            their target audience effectively.
          </p>
        </div>

        <div className="faq-item bg-white p-4 ">
          <h4 className="text-xl font-semibold mb-2">
            How can I benefit from Facebook ADS?
          </h4>
          <p className="text-gray-600">
            Facebook ADS provide a powerful platform for targeted advertising,
            allowing you to reach specific demographics and increase brand
            awareness. You&apos;ll learn practical strategies to leverage
            Facebook ADS for business growth.
          </p>
        </div>

        <div className="faq-item bg-white p-4 ">
          <h4 className="text-xl font-semibold mb-2">
            What tools are covered in the SEO section?
          </h4>
          <p className="text-gray-600">
            We explore a variety of SEO tools to analyze, optimize, and track
            website performance. Some of the tools covered include Google
            Analytics, SEMrush, Moz, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
