import React from "react";
import {
  UserPlus,
  Megaphone,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    title: "Sign Up",
    description:
      "Create your secure citizen account in seconds to start contributing.",
    icon: <UserPlus className="w-6 h-6 text-blue-600" />,
    bgColor: "bg-blue-50/80", // Added transparency to blend with main background
    iconBg: "bg-blue-100",
  },
  {
    title: "Report Issue",
    description:
      "Pin the location, upload photos, and describe the problem encountered.",
    icon: <Megaphone className="w-6 h-6 text-purple-600" />,
    bgColor: "bg-purple-50/80",
    iconBg: "bg-purple-100",
  },
  {
    title: "Staff Assign",
    description:
      "Our system routes your report and assigns a specialist immediately.",
    icon: <ClipboardCheck className="w-6 h-6 text-orange-600" />,
    bgColor: "bg-orange-50/80",
    iconBg: "bg-orange-100",
  },
  {
    title: "Work Done",
    description: "Receive real-time updates once the issue is fully resolved.",
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    bgColor: "bg-green-50/80",
    iconBg: "bg-green-100",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-black/5  uppercase tracking-wide backdrop-blur-sm">
            Process
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold  tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg  max-w-2xl mx-auto">
            Resolving community issues is easier than ever. Follow these four
            simple steps to make an impact.
          </p>
        </div>

        {/* Cards Grid with Arrows */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* The Card */}
              <div
                className={`${step.bgColor} backdrop-blur-md p-8 h-full rounded-[2.5rem] flex flex-col items-start text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-white/40 shadow-sm`}
              >
                <div
                  className={`${step.iconBg} p-4 rounded-2xl mb-6 shadow-inner`}
                >
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Arrow Connection - Desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-7 top-1/2 -translate-y-1/2 z-10">
                  <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2.5 border border-white/50 transform group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
              )}

              {/* Arrow Connection - Mobile */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4">
                  <div className="bg-black/5 rounded-full p-2 rotate-90 backdrop-blur-sm">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
