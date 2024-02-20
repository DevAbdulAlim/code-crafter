import React from "react";

const CheckoutPage = () => {
  return (
    <div className="container p-8 mx-auto my-8 bg-white rounded-md shadow-lg">
      <h1 className="mb-6 text-3xl font-semibold">Checkout</h1>

      {/* Product Information */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Course Title</h2>
        <p>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>Price: $295.55</p>
      </div>

      {/* Billing Information Form */}
      <form className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Billing Information</h2>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            rows={3}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="123 Main Street, City, Country"
            required
          ></textarea>
        </div>

        {/* Payment Details (For demonstration, use a fictional payment method) */}
        <div className="mb-4">
          <label
            htmlFor="creditCard"
            className="block text-sm font-medium text-gray-600"
          >
            Credit Card Number
          </label>
          <input
            type="text"
            id="creditCard"
            name="creditCard"
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        {/* Expiry Date and CVV (For demonstration, use fictional data) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-600"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-600"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="123"
              required
            />
          </div>
        </div>
      </form>

      {/* Order Summary */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
        <p>Total Price: $295.55</p>
        {/* Add any applicable taxes, discounts, or fees */}
      </div>

      {/* Payment Method */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Payment Method</h2>
        <p>Card ending in 3456</p>
        {/* Display payment method options, such as credit card icons or PayPal */}
      </div>

      {/* Place Order Button */}
      <button className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-700">
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
