"use client";

import type React from "react";

import { useState } from "react";
import type { Course } from "@prisma/client";

interface CheckoutFormProps {
  course: Course;
}

export default function CheckoutForm({ course }: CheckoutFormProps) {
  const [paymentOption, setPaymentOption] = useState<"now" | "later">("now");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the payment option
    console.log(`Enrolling in course: ${course.title}`);
    console.log(`Payment option: ${paymentOption}`);
    alert(`Thank you for enrolling! You chose to pay ${paymentOption}.`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Payment Options
        </h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              id="pay-now"
              name="payment-option"
              type="radio"
              checked={paymentOption === "now"}
              onChange={() => setPaymentOption("now")}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label
              htmlFor="pay-now"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Pay Now (${course.price})
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="pay-later"
              name="payment-option"
              type="radio"
              checked={paymentOption === "later"}
              onChange={() => setPaymentOption("later")}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label
              htmlFor="pay-later"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Pay Later (Installments available)
            </label>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Enroll Now
        </button>
      </div>
    </form>
  );
}
