import React from "react";
import PrimaryButton from "../../utils/Buttons/PrimaryButton";
import SecondaryButton from "../../utils/Buttons/SecondaryButton";
import HeroImage from "../../../public/Images/HeroBannerImage.jpg";

const HeroBanner = () => {
  return (
    <section class="bg-gradient-to-b from-green-50 to-blue-50 dark:from-green-900 mt-5 dark:to-gray-800">
      <div class="max-w-screen-xl mx-auto px-4 py-20 grid lg:grid-cols-12 gap-10">
        <div class="lg:col-span-7 flex flex-col justify-center">
          <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Amar Shohor – <br />
            <span class="text-green-600 dark:text-green-400">
              Your City, Your Voice
            </span>
          </h1>

          <p class="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            Report issues, explore city updates, and make your city better with
            the power of community. রাস্তাঘাট, ড্রেনেজ, লাইটপোস্ট, পানি—সবকিছুই
            এখন আপনার হাতে।
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mt-10">
            {PrimaryButton({
              link: "/all-issues",
              name: "View All Issues",
            })}
            {SecondaryButton({
              link: "/",
              name: "Report an Issue",
            })}
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
          <img
            src={HeroImage}
            alt="Amar Shohor"
            className="w-[480px] h-[480px] object-cover rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.25)] transform hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
