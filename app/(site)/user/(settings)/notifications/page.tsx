import React from "react";

const Notifications: React.FC = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Notifications</h2>
      <div className="p-4 bg-white rounded-md shadow-md">
        <h3 className="mb-2 text-lg font-semibold">Notification Settings</h3>
        <p className="mb-4 text-gray-700">
          Manage your notification settings here. Stay informed about important
          updates and activities related to your account.
        </p>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">Email Notifications</h4>
          <p className="text-gray-700">
            Receive email notifications for important events and updates.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">Push Notifications</h4>
          <p className="text-gray-700">
            Get push notifications on your device for real-time updates.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">SMS Notifications</h4>
          <p className="text-gray-700">
            Receive SMS notifications for urgent matters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
