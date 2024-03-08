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
      "The course duration varies depending on your pace of learning, but typically, it can be completed within [insert estimated duration here].",
  },
];

export default function Faq() {
  return (
    <div className="mb-8 border rounded-md">
      <h2 className="p-4 mb-4 text-2xl font-bold text-gray-800 bg-gray-100 border-b">
        Frequently Asking Questions
      </h2>
      <Accordion type="single" collapsible className="grid grid-cols-1 gap-4 m">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="p-4 bg-white"
          >
            <AccordionTrigger className="mb-2 text-xl font-semibold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
