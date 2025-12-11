import React from "react";

const About_Us = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Amar Shohor
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A citizen-driven platform dedicated to building a cleaner, safer,
            and smarter city through transparent issue reporting and real-time
            updates.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Amar Shohor empowers citizens to report problems in their area—such
            as streetlight failures, drainage issues, water supply problems,
            road damages, waste management concerns, and more. We aim to create
            a bridge between citizens and city authorities so that problems can
            be identified and resolved faster.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">
                Issue Reporting
              </h3>
              <p className="text-gray-600 mt-2">
                Citizens can report any city issue instantly with location,
                images, and category.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">
                Tracking Progress
              </h3>
              <p className="text-gray-600 mt-2">
                Users can track issue status updates from Pending → In Progress
                → Resolved.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">
                City Improvement
              </h3>
              <p className="text-gray-600 mt-2">
                Helps the city authorities identify root problems and improve
                public services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            How Amar Shohor Helps the Community
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>
              • Builds a transparent communication channel between citizens and
              authorities.
            </li>
            <li>• Reduces response time by organizing issues category-wise.</li>
            <li>
              • Helps maintain cleaner streets, functioning street lights, and
              safe public spaces.
            </li>
            <li>• Encourages community engagement in urban development.</li>
          </ul>
        </div>
      </section>

      {/* Contact or CTA */}
      <section className="bg-green-600 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg mb-6">
            Have questions or feedback? We’d love to hear from you.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About_Us;
