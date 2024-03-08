import React from "react";

const ProfilePrivacy = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Profile Privacy</h2>
      <div className="p-4 bg-white rounded-md shadow-md">
        <h3 className="mb-2 text-lg font-semibold">Privacy Settings</h3>
        <p className="mb-4 text-gray-700">
          Manage your profile privacy settings here. Control who can view your
          profile information and activities.
        </p>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">Public Profile</h4>
          <p className="text-gray-700">
            Your public profile is visible to everyone.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">Private Profile</h4>
          <p className="text-gray-700">
            Your profile is only visible to you and selected connections.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">Activity Visibility</h4>
          <p className="text-gray-700">
            Choose who can see your activity feed and recent actions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePrivacy;
