import React from "react";
import { FaDumbbell, FaHeartbeat, FaShoePrints } from "react-icons/fa";

const Features = () => {
  return (
    <div className="relative w-full flex flex-col bg-black text-white px-4 sm:px-16 py-12 overflow-hidden">
      {/* Title (Left-Aligned) */}
      <h2 className="text-green-500 text-3xl sm:text-5xl font-bold italic text-left mb-8 sm:mb-12">
        Why Choose HABFIT?
      </h2>

      <div className="relative flex flex-col sm:flex-row justify-center items-center w-full">
        {/* Feature Boxes (Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sm:w-[80%] lg:w-[70%] text-center">
          {/* Feature 1 */}
          <div className="border border-white p-6 rounded-xl bg-black w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Expert-Led Programs:</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Certified specialists design safe, effective, and scientifically backed fitness plans for postpartum recovery.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border border-white p-6 rounded-xl bg-black w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Holistic Approach:</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Support for physical fitness and mental well-being to reduce stress, improve sleep, and boost positivity.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border border-white p-6 rounded-xl bg-black w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Personalized Plans:</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Tailored workouts and nutrition to suit your unique goals and lifestyle.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="border border-white p-6 rounded-xl bg-black w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Proven Results:</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Trusted by hundreds of moms worldwide to regain confidence and lead healthier lives.
            </p>
          </div>
        </div>

        {/* Floating Icons - Desktop (Vertical) */}
        <div className="hidden sm:flex absolute right-6 lg:right-20 flex-col space-y-8 mt-6 sm:mt-0">
          <div className="bg-green-400 p-4 rounded-full w-16 h-16 flex items-center justify-center">
            <FaDumbbell size={30} className="text-black" />
          </div>
          <div className="bg-green-400 p-4 rounded-full w-16 h-16 flex items-center justify-center">
            <FaHeartbeat size={30} className="text-black" />
          </div>
          <div className="bg-green-400 p-4 rounded-full w-16 h-16 flex items-center justify-center">
            <FaShoePrints size={30} className="text-black" />
          </div>
        </div>

        {/* Mobile Icons (Horizontal) */}
        <div className="sm:hidden flex justify-center gap-6 mt-8">
          <div className="bg-green-400 p-4 rounded-full w-16 h-16 flex items-center justify-center">
            <FaDumbbell size={30} className="text-black" />
          </div>
          <div className="bg-green-400 p-4 rounded-full w-16 h-16 flex items-center justify-center">
            <FaHeartbeat size={30} className="text-black" />
          </div>
          <div className="bg-green-400 p-4 rounded-full w-16 h-16 flex items-center justify-center">
            <FaShoePrints size={30} className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;