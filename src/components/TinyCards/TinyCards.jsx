import React from "react";
import { GiShintoShrineMirror } from "react-icons/gi";
import { IoTimer } from "react-icons/io5";
import { BsFillDatabaseFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const TinyCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="bg-green-100 dark:bg-green-900 rounded-2xl p-6 flex flex-col items-start gap-3 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="bg-green-200 dark:bg-green-800 p-3 rounded-lg transition-colors duration-300 hover:bg-green-300 dark:hover:bg-green-700">
            <GiShintoShrineMirror />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
            Improves transparency
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            We ensure total accountability by making repair progress visible to
            the whole community.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-purple-100 dark:bg-purple-900 rounded-2xl p-6 flex flex-col items-start gap-3 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="bg-purple-200 dark:bg-purple-800 p-3 rounded-lg transition-colors duration-300 hover:bg-purple-300 dark:hover:bg-purple-700">
            <IoTimer />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
            Reduces response time
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            We eliminate bureaucratic delays to get repairs started the moment
            you hit send.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-green-100 dark:bg-[#132440] rounded-2xl p-6 flex flex-col items-start gap-3 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="bg-green-200 dark:bg-[#1c2f4e] p-3 rounded-lg transition-colors duration-300 hover:bg-green-300 dark:hover:bg-green-700">
            <BsFillDatabaseFill />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
            Helps collect and analyze infrastructure data
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            We use community data to fix the root cause, not just the symptoms.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-blue-100 dark:bg-blue-900 rounded-2xl p-6 flex flex-col items-start gap-3 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="bg-blue-200 dark:bg-blue-800 p-3 rounded-lg transition-colors duration-300 hover:bg-blue-300 dark:hover:bg-blue-700">
            <FaMoneyBillTrendUp />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
            Makes city service delivery more efficient
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            This ensures more of your tax dollars go directly toward fixing
            roads and pipes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TinyCards;
