import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black to-red-950">
      <div className="text-center">
        {/* Gradient spinner */}
        <div className="mx-auto mb-4 w-16 h-16 border-4 border-t-red-600 border-b-black border-l-black border-r-red-600 rounded-full animate-spin"></div>

        {/* Loading text */}
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we fetch the content.</p>
      </div>
    </div>
  );
};

export default LoadingPage;
