"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Profile: React.FC = () => {
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-center">
            {session?.user?.image ? (
              <Image
                src={session.user.image || "/placeholder.svg"}
                alt={session.user.name || "User"}
                width={80}
                height={80}
                className="rounded-full"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gray-600">
                  {session?.user?.name?.charAt(0) || "U"}
                </span>
              </div>
            )}
          </div>
          <h3 className="mt-4 text-center text-xl font-semibold text-gray-900">
            {session?.user?.name || "User"}
          </h3>
          <p className="mt-1 text-center text-sm text-gray-600">
            {session?.user?.email}
          </p>
        </div>
        <div className="px-4 py-4 sm:px-6">
          <button
            onClick={handleSignOut}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
