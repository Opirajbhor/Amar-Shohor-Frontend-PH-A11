import React, { useState } from "react";

const SearchFilter = () => {
 const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-4">

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search issues by location, street or title..."
          className="flex-1 px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 dark:placeholder-gray-500 dark:bg-gray-800 dark:text-white transition"
        />

        {/* Filter Dropdown */}
        <div className="relative w-full sm:w-48">
          <button
            onClick={() => setOpen(!open)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            Filter
            <span className="ml-2">▼</span>
          </button>

          {open && (
            <div className="absolute mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md rounded-xl z-20 overflow-hidden">
              <button className="block w-full text-left px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition">Road</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition">Street Light</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition">Drainage</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition">Water</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition">Garbage</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition">Others</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
