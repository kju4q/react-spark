import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg mt-2 text-gray-600">
        The page you are looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
