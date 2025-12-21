import React from "react";
import SearchFilter from "../SearchFilter/SearchFilter";
import { Link } from "react-router";
import { AiOutlineLike } from "react-icons/ai";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700 border border-yellow-300",
  "In Progress": "bg-blue-100 text-blue-700 border border-blue-300",
  Completed: "bg-green-100 text-green-700 border border-green-300",
  Resolved: "bg-green-100 text-green-700 border border-green-300", // Added just in case
};

const priorityColors = {
  High: "bg-red-500 text-white",
  Normal: "bg-blue-500 text-white",
};

const IssueCard = ({ issues }) => {
  console.log(issues);
  return (
    <div className="max-w-7xl mx-auto p-6">
      <SearchFilter />

      <div className="grid gap-8 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {issues.map((issue, index) => (
          <div
            key={issue._id || index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col border border-gray-100 dark:border-gray-700"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={
                  issue?.image ||
                  "https://via.placeholder.com/400x200?text=No+Image"
                }
                alt={issue.title}
                className="w-full h-52 object-cover"
              />
              {/* Floating Status Badge on Image */}
              <div className="absolute top-3 right-3">
                <span
                  className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-sm ${
                    statusColors[issue.status] || "bg-gray-200"
                  }`}
                >
                  {issue.status}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                {/* Category */}
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded uppercase tracking-wide">
                  {issue.category}
                </span>
                {/* Priority Badge */}
                <span
                  className={`text-xs font-bold px-2 py-1 rounded shadow-sm ${issue?.isBoosted ? "badge badge-soft badge-error" : "badge badge-soft badge-success"}`}
                >
                  {issue?.isBoosted ? "High" : "Normal"}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
                {issue.title}
              </h3>

              {/* Location */}
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 flex items-center gap-1">
                <span className="text-base">📍</span> {issue.location}
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-3 line-clamp-2 italic">
                "{issue.description}"
              </p>

              {/* Footer Section: Upvote & View Details */}
              <div className="mt-auto pt-5">
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                  {/* Upvote Group */}
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <button disabled
                     className="flex items-center justify-center p-2 rounded-full bg-gray-50 dark:bg-gray-700  transition-colors">
                      <AiOutlineLike />
                    </button>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold  ">
                        {issue?.upVotes?.length || 0}
                      </span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link
                    to={`/all-issues/${issue._id}`}
                    state={{ issue }}
                    className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md active:scale-95"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssueCard;
