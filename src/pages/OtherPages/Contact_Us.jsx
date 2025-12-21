import React from "react";

const Contact_Us = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900 dark:to-gray-800">
      {/* Header */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Contact AmarShohor
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or suggestions? Reach out to us and help
            improve your city through transparent communication.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Whether you are a citizen, volunteer, or city authority, your
              message matters to us. We aim to respond as quickly as possible.
            </p>

            <div className="space-y-5 text-gray-700 dark:text-gray-300">
              <p>
                📍 <span className="font-semibold">Address:</span> City Service
                Center, AmarShohor
              </p>
              <p>
                📧 <span className="font-semibold">Email:</span>{" "}
                support@amarshohor.com
              </p>
              <p>
                ☎️ <span className="font-semibold">Phone:</span> 
                +8801700-112233
              </p>
              <p>
                🕒 <span className="font-semibold">Office Hours:</span> Sun –
                Thu, 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact_Us;
