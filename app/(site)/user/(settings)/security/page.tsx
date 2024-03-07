import React from "react";

const Security = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Security</h2>
      <div className="p-4 bg-white rounded-md shadow-md">
        <h3 className="mb-2 text-lg font-semibold">Security Settings</h3>
        <p className="mb-4 text-gray-700">
          Manage your account security settings here. Protect your account with
          strong passwords and enable two-factor authentication for added
          security.
        </p>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">Password</h4>
          <p className="text-gray-700">
            Change your password regularly and ensure it's strong and secure.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">
            Two-Factor Authentication
          </h4>
          <p className="text-gray-700">
            Enable two-factor authentication to add an extra layer of security
            to your account.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">Security Questions</h4>
          <p className="text-gray-700">
            Set up security questions to help verify your identity in case you
            forget your password.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
