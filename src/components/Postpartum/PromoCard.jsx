import React from "react";
import backgroundImage from "./../../assets/sa.png"; // Replace with actual image path
import womanImage from "./../../assets/ww.jpg"; // Replace with actual image path
import { Link } from "react-scroll";

const PromoCard = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:w-[80%] w-full">
        
        {/* Left Section: Background Image with Woman Image */}
        <div className="relative w-[400px] lg:w-[600px] h-[500px] rounded-2xl overflow-hidden flex items-center justify-center">
          {/* <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div> */}
          <img
            src={womanImage}
            alt="man with equip"
            className="absolute h-auto object-cover"
          />
        </div>

        {/* Right Section: Single Card */}
        <div className="bg-white rounded-2xl p-8 w-[350px] sm:w-[450px] md:w-[500px] shadow-lg flex flex-col items-center lg:items-start text-left">
          <h2 className="text-green-400 text-2xl sm:text-3xl font-bold text-center lg:text-left mb-4">
            Don’t Miss Out – Spots Are Filling Fast!
          </h2>
          <p className="text-black text-base sm:text-lg leading-relaxed mb-4 text-center lg:text-left">
            Our postpartum fitness programs are in high demand, and we only
            accept a limited number of clients each month to ensure personalized
            attention. Take action now to secure your spot and start your
            journey to a stronger, healthier you.
          </p>
          <Link to="bonus" smooth={true} duration={400}>
              <button className="bg-green-500 text-black font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition">
                GRAB OFFER
              </button>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default PromoCard;
