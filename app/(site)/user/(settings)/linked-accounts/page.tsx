import React from "react";
import { FaFacebook, FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";

const LinkedAccounts: React.FC = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Linked Accounts</h2>
      <div className="p-4 bg-white rounded-md shadow-md">
        <p className="mb-4 text-gray-700">
          You can link your social accounts into your geeks accounts & also
          access your history of linked accounts and manage your accounts in
          this section.
        </p>
        <div className="flex items-center mb-4">
          <FaFacebook className="w-6 h-6 mr-2 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold">Facebook</h3>
            <p className="text-gray-700">
              Enable one-click login and receive more personalized course
              recommendations.
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <FaGoogle className="w-6 h-6 mr-2 text-red-600" />
          <div>
            <h3 className="text-lg font-semibold">Google</h3>
            <p className="text-gray-700">
              Enable one-click login and receive more personalized course
              recommendations.
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <FaGithub className="w-6 h-6 mr-2 text-gray-800" />
          <div>
            <h3 className="text-lg font-semibold">Github</h3>
            <p className="text-gray-700">
              Enable one-click login and receive more personalized course
              recommendations.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FaTwitter className="w-6 h-6 mr-2 text-blue-400" />
          <div>
            <h3 className="text-lg font-semibold">Twitter</h3>
            <p className="text-gray-700">
              Enable one-click login and receive more personalized course
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedAccounts;
