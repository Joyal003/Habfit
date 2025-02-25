import React from "react";
import bg2 from "./../../assets/s.png";  

const Welcome = () => {
  return (
    <div id="welcome"
    className="relative w-full flex flex-col bg-black text-white px-6 sm:px-16 pb-24 overflow-hidden">
      {/* Background Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 z-0"></div>

      {/* Heading & Subtitle - Positioned Parallel */}
      <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center mt-10 sm:mt-16 w-full z-10">
        {/* Main Heading */}
        <div className="text-green-400 text-4xl sm:text-6xl md:text-7xl font-bold italic">
          Welcome to <br className="hidden sm:block" /> HABFIT
        </div>

        {/* Subtitle - Adjusted for mobile view */}
        <div className="relative sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 text-white text-sm sm:text-lg md:text-xl font-bold max-w-[90%] sm:max-w-[50%] text-center sm:ml-6 mt-4 sm:mt-0">
          Your Partner in Postpartum Fitness and Wellness
          <br className="hidden sm:block" /> 
          Rediscover Your Strength, Reclaim Your Confidence
        </div>
      </div>

      {/* Description Box - Placed Below "HABFIT" */}
      <div className="relative mt-4 sm:mt-6 border-2 border-green-400 p-4 sm:p-6 text-xs sm:text-base md:text-lg leading-relaxed max-w-[90%] sm:max-w-[60%] bg-black bg-opacity-80 rounded-lg z-10">
        We understand that postpartum is a unique and transformative journey. 
        Our mission is to empower new mothers to embrace their bodies, rebuild strength, 
        and achieve their fitness goals in a safe and supportive environment. 
        Whether you aim to lose weight, tone your body, or simply feel more energized, 
        we are here to guide you every step of the way.
      </div>

      {/* Image Positioned Higher for Better Alignment */}
      <div className="absolute top-[20%] sm:top-[15%] right-0 w-[90%] sm:w-[60%] md:w-[50%] z-0">
        <img 
          src={bg2} 
          alt="fitness" 
          className="w-full h-auto object-cover opacity-100"
        />
      </div>
    </div>
  );
};

export default Welcome;
