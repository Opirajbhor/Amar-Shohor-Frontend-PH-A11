import React from "react";
import SearchFilter from "../SearchFilter/SearchFilter";

// Sample data
const issues = [
  {
    id: 1,
    title: "Broken Street Light",
    description:
      "The street light near Kalyanpur Market is not working since last week.",
    location: "Kalyanpur, Dhaka",
    category: "Street Light",
    status: "Pending",
    image: "https://via.placeholder.com/400x250.png?text=Street+Light",
  },
  {
    id: 2,
    title: "Overflowing Drain",
    description: "Drainage clogged after last night’s rain.",
    location: "Dhanmondi, Dhaka",
    category: "Drainage",
    status: "In Progress",
    image: "https://via.placeholder.com/400x250.png?text=Drainage",
  },
  {
    id: 3,
    title: "Water Leakage",
    description: "Water pipe leakage causing water logging on road.",
    location: "Mirpur, Dhaka",
    category: "Water",
    status: "Completed",
    image: "https://via.placeholder.com/400x250.png?text=Water",
  },
  // Add more issues as needed
];

const statusColors = {
  Pending: "bg-yellow-200 text-yellow-800",
  "In Progress": "bg-blue-200 text-blue-800",
  Completed: "bg-green-200 text-green-800",
};

const IssueCard = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl text-center mt-5 font-bold mb-6">Reported Issues</h2>
      <SearchFilter></SearchFilter>

      <div className="grid gap-6 mt-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            {/* Image */}
            <img
              src={issue.image}
              alt={issue.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-1 gap-2">
              {/* Category */}
              <span className="text-xs font-semibold text-white bg-green-500 px-2 py-1 rounded-full w-max">
                {issue.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {issue.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {issue.description}
              </p>

              {/* Location */}
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                📍 {issue.location}
              </p>

              <div className="flex justify-between items-center mt-3">
                {/* Status Badge */}
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    statusColors[issue.status]
                  }`}
                >
                  {issue.status}
                </span>

                {/* Upvote Button */}
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 9l-3 3m0 0l-3-3m3 3V4"
                    />
                  </svg>
                </button>
              </div>

              {/* View Details Button */}
              <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssueCard;
