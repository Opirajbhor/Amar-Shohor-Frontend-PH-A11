import React from "react";
import PrimaryButton from "../../utils/Buttons/PrimaryButton";
import SecondaryButton from "../../utils/Buttons/SecondaryButton";
import HeroImage from "../../../public/Images/HeroBannerImage.jpg";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 rounded-3xl via-blue-50 to-white dark:from-green-900 dark:via-gray-900 dark:to-gray-800 mt-5">
      
      {/* Decorative Blur Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-40 dark:bg-green-700"></div>
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40 dark:bg-blue-700"></div>

      <div className="relative max-w-screen-xl mx-auto px-4 py-24 grid lg:grid-cols-12 gap-14">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full w-fit dark:text-green-300 dark:bg-green-800">
            Community Powered City Platform
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
            Amar Shohor <br />
            <span className="text-green-600 dark:text-green-400">
              Your City, Your Voice
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
            Report issues, explore city updates, and make your city better with
            the power of community. <br />
            রাস্তাঘাট, ড্রেনেজ, লাইটপোস্ট, পানি—সবকিছুই
            এখন আপনার হাতে।
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            {PrimaryButton({
              link: "/all-issues",
              name: "View All Issues",
            })}
            {SecondaryButton({
              link: "/dashboard/report-issue",
              name: "Report an Issue",
            })}
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-8 mt-12 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <p className="font-bold text-xl text-gray-900 dark:text-white">
                10K+
              </p>
              <p>Issues Reported</p>
            </div>
            <div>
              <p className="font-bold text-xl text-gray-900 dark:text-white">
                8K+
              </p>
              <p>Issues Resolved</p>
            </div>
            <div>
              <p className="font-bold text-xl text-gray-900 dark:text-white">
                500+
              </p>
              <p>Active Staff</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
          <div className="relative">
            <img
              src={HeroImage}
              alt="Amar Shohor"
              className="w-[480px] h-[480px] object-cover rounded-[36px]
              shadow-[0_25px_60px_rgba(0,0,0,0.3)]
              transform hover:scale-105 transition-all duration-500"
            />

            {/* Image Accent */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-green-400 rounded-[36px] -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
