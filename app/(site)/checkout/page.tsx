"use client";

import React, { useState } from "react";

type PaymentMethod = "creditCard" | "paypal" | "other";

const CourseEnrollmentPage: React.FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod | null>(null);

  const handlePaymentMethodSelection = (paymentMethod: PaymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  return (
    <div className="container max-w-2xl p-4 mx-auto mt-8 border border-gray-200 rounded-md shadow-md">
      <p className="mb-4 text-lg">Choose a payment method:</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div
          className={`payment-method bg-white border border-gray-300 rounded-md  cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
            selectedPaymentMethod === "creditCard"
              ? "selected border-blue-500"
              : ""
          }`}
          onClick={() => handlePaymentMethodSelection("creditCard")}
        >
          <label className="flex items-center p-4">
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              className="mr-2"
            />
            Credit Card
          </label>
        </div>
        <div
          className={`payment-method bg-white border border-gray-300 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
            selectedPaymentMethod === "paypal" ? "selected border-blue-500" : ""
          }`}
          onClick={() => handlePaymentMethodSelection("paypal")}
        >
          <label className="flex items-center p-4 ">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              className="mr-2"
            />
            PayPal
          </label>
        </div>
        {/* Add more payment method cards as needed */}
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-8 text-white transition duration-300 ease-in-out bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default CourseEnrollmentPage;
