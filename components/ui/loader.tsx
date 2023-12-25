// Loader.tsx
import React from "react";
import { LoaderIcon } from "lucide-react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-gray-400 animate-spin">
        <LoaderIcon className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Loader;
