import React from "react";

const TinyCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

    {/* Card 1 */}
    <div className="bg-green-100 dark:bg-green-900 rounded-2xl p-6 flex flex-col items-start gap-3 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <div className="bg-green-200 dark:bg-green-800 p-3 rounded-lg transition-colors duration-300 hover:bg-green-300 dark:hover:bg-green-700">
        <svg className="w-6 h-6 text-green-700 dark:text-green-200 transition-colors duration-300 hover:text-green-900 dark:hover:text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18v8H3zM3 6h18v4H3z" />
        </svg>
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Fast & Easy Refunds</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Get your money back quickly with zero hassle.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-purple-100 dark:bg-purple-900 rounded-2xl p-6 flex flex-col items-start gap-3 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <div className="bg-purple-200 dark:bg-purple-800 p-3 rounded-lg transition-colors duration-300 hover:bg-purple-300 dark:hover:bg-purple-700">
        <svg className="w-6 h-6 text-purple-700 dark:text-purple-200 transition-colors duration-300 hover:text-purple-900 dark:hover:text-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11V7m0 8v-1m0-3v-1m0 6v-1" />
        </svg>
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Secure Payments</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Your transactions are encrypted and fully protected.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-green-100 dark:bg-green-900 rounded-2xl p-6 flex flex-col items-start gap-3 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <div className="bg-green-200 dark:bg-green-800 p-3 rounded-lg transition-colors duration-300 hover:bg-green-300 dark:hover:bg-green-700">
        <svg className="w-6 h-6 text-green-700 dark:text-green-200 transition-colors duration-300 hover:text-green-900 dark:hover:text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 10v4m-6-4v4m-6-4v4" />
        </svg>
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">24/7 Customer Support</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Our team is always online to assist you anytime.</p>
    </div>

    {/* Card 4 */}
    <div className="bg-blue-100 dark:bg-blue-900 rounded-2xl p-6 flex flex-col items-start gap-3 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <div className="bg-blue-200 dark:bg-blue-800 p-3 rounded-lg transition-colors duration-300 hover:bg-blue-300 dark:hover:bg-blue-700">
        <svg className="w-6 h-6 text-blue-700 dark:text-blue-200 transition-colors duration-300 hover:text-blue-900 dark:hover:text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v-1m0-3v-1" />
        </svg>
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Exclusive Daily Offers</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Subscribe now to enjoy daily discounts and deals.</p>
    </div>

  </div>
</div>

  );
};

export default TinyCards;
