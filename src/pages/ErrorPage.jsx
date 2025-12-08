// File: NotFound.jsx
import React from "react";
import { useNavigate } from "react-router";
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <img
        src="/Images/404_error.png"
        alt="404 Error"
        className="w-[600px] mb-6"
      />
      <h3 className="text-green-600 font-bold text-3xl mb-5">URL Not Found</h3>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600 transition cursor-pointer"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
