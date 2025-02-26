import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import bgcol from "./../assets/bgr.jpg"; // Import background image

const Contact = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen px-6 py-12 md:px-20 bg-black">
      {/* Background with Responsive Styling */}
      <div
        className="absolute inset-0 rounded-[30px] sm:rounded-[50px] md:rounded-[80px] overflow-hidden"
        style={{
          background: `url(${bgcol}) no-repeat center center / cover`,
          filter: "blur(10px)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 sm:px-8">
        <h2 className="text-green-400 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Don't Wait – Join the HABFIT Community Today!
        </h2>
        <p className="text-white text-lg sm:text-xl mt-4">
          Motherhood is a beautiful journey, and so is reclaiming your fitness. Let HABFIT help you feel stronger, healthier, and more confident than ever.
        </p>

        <button className="mt-6 bg-green-400 text-black font-bold py-3 px-6 sm:px-10 rounded-full text-lg sm:text-xl hover:bg-green-500 transition shadow-lg">
          JOIN OUR COMMUNITY
        </button>

        {/* Contact Section */}
        <div className="mt-12 w-full">
          <h3 className="text-green-400 text-2xl sm:text-3xl font-bold">Contact Us</h3>

          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-green-300 text-3xl hover:text-green-400 transition" />
            </a>
            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-300 text-3xl hover:text-green-400 transition" />
            </a>
          </div>

          <div className="mt-6">
            <p className="text-green-300 text-xl font-semibold">EMAIL</p>
            <p className="text-white text-lg sm:text-xl">habfitprogram@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
