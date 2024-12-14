import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="px-4 py-12 mx-auto max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mt-2">
          Find answers to the most common questions about our courses, platform,
          and policies.
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem
          value="item-1"
          className="border border-gray-200 rounded-lg shadow-sm"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-t-lg">
            Is there a free trial available?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-gray-600">
            Yes, we offer a free trial for all our courses. You can sign up and
            access a limited set of lessons to see if the course meets your
            needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border border-gray-200 rounded-lg shadow-sm"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-t-lg">
            How do I access the course materials?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-gray-600">
            Once you enroll in a course, you'll gain access to the course
            materials through our online learning platform. You can log in
            anytime to access the lessons, assignments, and resources.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border border-gray-200 rounded-lg shadow-sm"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-t-lg">
            Are there any prerequisites for the courses?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-gray-600">
            The prerequisites vary depending on the course. Some courses may
            require basic knowledge of certain topics, while others are suitable
            for beginners. You can find the specific prerequisites listed on the
            course page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="border border-gray-200 rounded-lg shadow-sm"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-t-lg">
            Can I access the course materials offline?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-gray-600">
            No, our course materials are only accessible online through our
            learning platform. However, you can download certain resources for
            offline viewing, such as PDF documents and lecture notes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="border border-gray-200 rounded-lg shadow-sm"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-t-lg">
            Is technical support available for students?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-gray-600">
            Yes, we provide technical support to all our students. If you
            encounter any issues with accessing the course materials or using
            our platform, you can reach out to our support team for assistance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className="border border-gray-200 rounded-lg shadow-sm"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-t-lg">
            Are the courses self-paced?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-gray-600">
            Yes, most of our courses are self-paced, allowing you to study at
            your own convenience. However, some courses may have deadlines for
            assignments and exams, so be sure to check the course details before
            enrolling.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
