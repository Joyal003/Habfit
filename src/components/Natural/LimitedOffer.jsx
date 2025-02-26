import React from "react";
import { Link } from "react-scroll";

const LimitedOffer = () => {
  return (
    <div className="bg-black text-white py-16 px-5 sm:px-20 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Flex container to ensure equal height */}
      <div className="flex flex-col md:flex-row items-stretch w-full max-w-6xl gap-16">
        
        {/* Left: Image with Increased Width */}
        <div className="relative w-full md:w-4/5 bg-gray-900 rounded-2xl flex-1">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/09/11/30/dumbbell-1966247_1280.jpg"
            alt="Workout"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right: Text & CTA */}
        <div className="bg-white text-black p-8 rounded-xl shadow-lg w-full md:w-2/5 flex-1 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-500">
            Don’t Miss Out – Limited Spots Available!
          </h2>
          Our Natural bodybuilding programs are currently offered at an exclusive discounted price, 
          we only accept a limited number of clients each month to ensure personalized attention.
           Take action now to secure your spot and start your journey to a stronger, healthier you. 
           Don't wait until it's too late! book your consultation now
           

          {/* CTA Button */}
          <div className="flex justify-center mt-6">
          <Link to="bonus" smooth={true} duration={400}>
              <button className="bg-green-500 text-black font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition">
                GRAB OFFER
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LimitedOffer;
