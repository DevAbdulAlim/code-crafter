import React from "react";

const SocialProfilesPage: React.FC = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Social Profiles</h2>
      <div className="p-4 bg-white rounded-md shadow-md">
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold">
            Add your social profile links in below social accounts.
          </h3>
          <div className="mb-4">
            <h4 className="mb-2 text-lg font-semibold">Twitter</h4>
            <p className="text-gray-700">
              Add your Twitter username (e.g. johnsmith).
            </p>
            <input
              type="text"
              placeholder="Twitter Profile Name"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg font-semibold">Facebook</h4>
            <p className="text-gray-700">
              Add your Facebook username (e.g. johnsmith).
            </p>
            <input
              type="text"
              placeholder="Facebook Profile Name"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg font-semibold">Instagram</h4>
            <p className="text-gray-700">
              Add your Instagram username (e.g. johnsmith).
            </p>
            <input
              type="text"
              placeholder="Instagram Profile Name"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg font-semibold">LinkedIn</h4>
            <p className="text-gray-700">Add your LinkedIn profile URL.</p>
            <input
              type="text"
              placeholder="LinkedIn Profile URL"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg font-semibold">YouTube</h4>
            <p className="text-gray-700">Add your YouTube profile URL.</p>
            <input
              type="text"
              placeholder="YouTube URL"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProfilesPage;
