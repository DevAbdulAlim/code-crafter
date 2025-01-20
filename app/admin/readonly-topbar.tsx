import React from "react";

const ReadOnlyTopbar = () => {
  const isReadOnlyMode = process.env.READ_ONLY_MODE === "true";

  if (!isReadOnlyMode) return null;

  return (
    <div className="bg-red-500 text-white text-center p-2 font-semibold">
      ⚠️ The application is in read-only mode. No changes can be made.
    </div>
  );
};

export default ReadOnlyTopbar;
