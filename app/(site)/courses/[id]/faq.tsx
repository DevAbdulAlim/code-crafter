import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define an array of FAQ items
const faqData = [
  {
    question: "What topics are covered in the web design course?",
    answer:
      "The course covers HTML, CSS, JavaScript, responsive design, UI/UX principles, and more.",
  },
  {
    question: "Are there any prerequisites for this web design course?",
    answer:
      "No prerequisites are required. However, basic computer skills and familiarity with the internet are beneficial.",
  },
  {
    question:
      "Will I receive a certificate upon completion of the web design course?",
    answer:
      "Yes, upon successful completion, you will receive a certificate acknowledging your proficiency in web design.",
  },
  {
    question:
      "Is this course suitable for beginners or more advanced designers?",
    answer:
      "The course caters to both beginners and those with some experience in web design, offering content suitable for various skill levels.",
  },
  {
    question: "How long does it take to complete the web design course?",
    answer:
      "The course duration varies depending on your pace of learning, but typically, it can be completed within 8–12 weeks.",
  },
];

export default function Faq() {
  return (
    <section className="mb-8 rounded-lg bg-white shadow-md">
      {/* FAQ Header */}
      <h2 className="p-6 text-2xl font-bold text-gray-800 bg-blue-50 border-b">
        Frequently Asked Questions
      </h2>

      {/* Accordion Section */}
      <Accordion type="single" collapsible className="p-6">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="mb-4 border rounded-lg bg-gray-50 hover:shadow-lg"
          >
            {/* Question Trigger */}
            <AccordionTrigger className="p-4 text-lg font-semibold text-blue-800 hover:text-blue-600">
              {item.question}
            </AccordionTrigger>

            {/* Answer Content */}
            <AccordionContent className="px-4 pb-4 text-gray-700">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
