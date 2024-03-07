import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="px-4 py-8 mx-auto max-w-7xl">
      <h1 className="text-2xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer a free trial for all our courses. You can sign up and
            access a limited set of lessons to see if the course meets your
            needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How do I access the course materials?
          </AccordionTrigger>
          <AccordionContent>
            Once you enroll in a course, you'll gain access to the course
            materials through our online learning platform. You can log in
            anytime to access the lessons, assignments, and resources.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Are there any prerequisites for the courses?
          </AccordionTrigger>
          <AccordionContent>
            The prerequisites vary depending on the course. Some courses may
            require basic knowledge of certain topics, while others are suitable
            for beginners. You can find the specific prerequisites listed on the
            course page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Can I access the course materials offline?
          </AccordionTrigger>
          <AccordionContent>
            No, our course materials are only accessible online through our
            learning platform. However, you can download certain resources for
            offline viewing, such as PDF documents and lecture notes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Is technical support available for students?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we provide technical support to all our students. If you
            encounter any issues with accessing the course materials or using
            our platform, you can reach out to our support team for assistance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Are the courses self-paced?</AccordionTrigger>
          <AccordionContent>
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
