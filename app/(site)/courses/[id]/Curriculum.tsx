import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Curriculum() {
  return (
    <div className="mb-8 border rounded-lg bg-white shadow-md">
      <h2 className="p-4 text-2xl font-bold text-gray-800 bg-blue-50 border-b">
        Curriculum
      </h2>

      <Accordion type="single" collapsible>
        {[...Array(4)].map((_, index) => (
          <AccordionItem
            className="px-4 py-2 border-b last:border-b-0"
            key={index}
            value={`item-${index}`}
          >
            <AccordionTrigger className="text-lg font-semibold text-gray-700 flex justify-between items-center">
              <span>Introduction of Digital Marketing (3 lectures)</span>
              <span className="text-sm text-gray-500">15m total</span>
            </AccordionTrigger>
            <AccordionContent>
              {[...Array(4)].map((_, index) => (
                <div
                  className="flex items-center justify-between py-4 border-b last:border-b-0"
                  key={index}
                >
                  {/* Left Content */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <FaPlayCircle className="text-blue-600 text-lg" />
                    </div>
                    <div>
                      <p className="mb-1 text-lg font-semibold text-gray-700">
                        What is web design?
                      </p>
                      <span className="text-sm text-gray-500">10m 56s</span>
                    </div>
                  </div>

                  {/* Right Content */}
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition">
                    Play
                  </button>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
