import React from "react";
import bg1 from "./../../assets/1.png"; 
import logo from "./../../assets/logo.png"; 
import habfitVideo from "./../../assets/habfit family.mp4";  // Import the video
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { Link as RouterLink } from "react-router-dom";  // Import Link from react-scroll

const Home = () => {
  return (
    <div className="relative w-full min-h-screen  bg-black text-white flex flex-col">
      {/* Navigation - Logo at Top Left */}
      <div className="absolute -top-10 left-4">
      <RouterLink to="/home"> {/* Wrap logo inside Link for navigation */}
    <img src={logo} alt="HABFIT Logo" className="w-40 sm:w-48 cursor-pointer" /> 
  </RouterLink>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between h-full px-8 sm:px-16 pt-24">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Motivation <br /> Fades But <br /> Habit Lasts
          </h1>
          <p className="text-base sm:text-lg mt-4">Start Your Transformation Today</p>

          {/* Scroll to Details Component */}
          <ScrollLink
            to="details"  // Reference the 'details' ID from the Details component
            smooth={true}  // Smooth scroll
            duration={500}  // Duration of the scroll
          >
            <button className="mt-6 bg-green-400 text-black px-6 py-3 text-lg font-semibold rounded-full hover:bg-green-500">
              LEARN MORE
            </button>
          </ScrollLink>
        </div>

        {/* Right Side - Video Card */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0">
          <div className="relative w-64 sm:w-80 h-[80%] sm:h-[90%] flex items-center justify-center border-8 border-gray-900 rounded-3xl overflow-hidden shadow-2xl z-10">
            {/* Video Container */}
            <video 
              src={habfitVideo} 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gradient under the Card */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-orange-500 to-blue-500 blur-3xl opacity-50 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
