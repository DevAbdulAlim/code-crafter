import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is the practice of promoting products, services, or brands through digital channels such as search engines, social media, email, and websites.",
  },
  {
    question: "How long does it take to complete this course?",
    answer:
      "The course duration is flexible and self-paced, but typically takes about 12 weeks to complete if you dedicate 5-7 hours per week.",
  },
  {
    question: "Is there a certificate upon completion?",
    answer:
      "Yes, you will receive a certificate of completion once you finish all the course modules and pass the final assessment.",
  },
];

export default function Faq() {
  return (
    <div className="mb-8 border rounded-lg bg-white shadow-md">
      <h2 className="p-4 text-2xl font-bold text-gray-800 bg-blue-50 border-b">
        Frequently Asked Questions
      </h2>
      <div className="p-6">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
