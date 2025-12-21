import React from "react";

const About_Us = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            About AmarShohor
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A citizen-driven platform dedicated to building a cleaner, safer,
            and smarter city through transparent issue reporting and real-time
            updates.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center dark:text-white mb-6">
            Our Mission
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Amar Shohor empowers citizens to report problems in their area—such
            as streetlight failures, drainage issues, water supply problems,
            road damages, waste management concerns, and more. Our mission is to
            create a transparent and efficient bridge between citizens and city
            authorities so issues are identified and resolved faster.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-800 dark:to-green-900 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Issue Reporting
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Citizens can report city issues instantly with location, images,
                and proper categorization.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-800 dark:to-blue-900 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Progress Tracking
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Track issues transparently from Pending → In Progress → Resolved
                with real-time updates.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                City Improvement
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enables authorities to analyze patterns and improve public
                services efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            How Amar Shohor Helps the Community
          </h2>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 text-lg">
            <p>
              • Builds a transparent communication channel between citizens and
              city authorities.
            </p>
            <p>
              • Reduces response time by organizing and prioritizing issues.
            </p>
            <p>
              • Improves safety, cleanliness, and essential public services.
            </p>
            <p>
              • Encourages active community participation in urban development.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default About_Us;
