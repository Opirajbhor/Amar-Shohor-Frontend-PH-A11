import React from "react";
import { ArrowRight, ShieldCheck, Leaf } from "lucide-react";
import { Link } from "react-router";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[1.5rem] p-8 md:p-16 text-center shadow-2xl">
          {/* Decorative Background "Blobs" */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-300/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Tagline Badge */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8">
              <Leaf className="w-4 h-4 text-emerald-200" />
              <p className="text-emerald-50 text-xs font-medium uppercase tracking-wider">
                Join the Green Initiative
              </p>
            </div>

            <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Let’s build a <br />
              <span className="text-emerald-200">cleaner community.</span>
            </h2>

            <p className="text-emerald-50/90 text-lg mb-10 max-w-xl leading-relaxed">
              Your reports help our staff fix issues faster. Join thousands of
              citizens making our city a better place to live.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link to = '/dashboard/report-issue' className="flex items-center justify-center gap-2 bg-green-500 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer">
                Report an Issue
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-emerald-100/70 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure Citizen Data</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span>Staff Online Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
