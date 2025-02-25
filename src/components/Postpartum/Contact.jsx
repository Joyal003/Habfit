import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import bgcol from "./../../assets/4.png"; // Import background image

const Contact = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen px-6 py-12 md:px-20 bg-black">
      {/* Right Side Background with Curved Borders */}
      <div
        className="absolute inset-0 flex justify-center items-center overflow-hidden rounded-[80px]"
        style={{
          background: `url(${bgcol}) no-repeat center center / cover`, // Centered background
          width: "80%", // Keeps background centered in a balanced way
          height: "100%",
          filter: "blur(10px)", // Subtle blur for smooth blending
          borderRadius: "80px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-[80px]"></div> {/* Black Overlay */}
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <h2 className="text-green-400 text-3xl md:text-5xl font-bold mb-4">
          Don't Wait – Join the HABFIT Community Today!
        </h2>
        <p className="text-white text-lg md:text-xl mb-6">
          Motherhood is a beautiful journey, and so is reclaiming your fitness. Let HABFIT help you feel stronger, healthier, and more confident than ever.
        </p>

        <button className="bg-green-400 text-black font-bold py-3 px-8 rounded-full text-lg md:text-xl hover:bg-green-500 transition shadow-lg">
          JOIN OUR COMMUNITY
        </button>

        {/* Contact Section */}
        <div className="mt-12">
          <h3 className="text-green-400 text-3xl font-bold">Contact Us</h3>

          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-green-300 text-2xl hover:text-green-400 transition" />
            </a>
            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-300 text-2xl hover:text-green-400 transition" />
            </a>
          </div>

          <p className="text-green-300 text-xl font-semibold mt-4">EMAIL</p>
          <p className="text-white text-lg">habfitprogram@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
