import React from "react";

const WelcomeGroup = () => {
  return (
    <div
      id="welcome"
      className="relative w-full h-screen text-white flex flex-col items-center justify-center px-10"
      style={{
        backgroundImage: `
        linear-gradient(to bottom, black, rgba(0, 0, 0, 0.3), black), 
        linear-gradient(to right, black, rgba(0, 0, 0, 0.3), black), 
        url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: "cover",
        backgroundPosition: "top center", // Moves the image below heading
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Heading (Responsive) */}
      <div className="absolute top-8 left-5 md:top-10 md:left-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 italic">
          Welcome to <br />
          <span className="text-green-500">HABFIT</span>
        </h1>
      </div>

      {/* Centered Subtitle */}
      <div className="absolute top-32 md:top-32 w-full flex flex-col items-center text-center px-4">
        <h2 className="text-lg md:text-2xl  font-bold">
          Your Partner in Building Healthy Habits
        </h2>
        <h3 className="text-base md:text-xl  font-semibold mt-1">
          Transform Your Lifestyle, Embrace Wellness
        </h3>
      </div>

      {/* Responsive Description Box */}
      <div className="w-full max-w-2xl md:max-w-4xl border backdrop-blur-sm border-green-400 p-6 md:p-8 text-sm md:text-lg text-justify bg-black bg-opacity-70 rounded-lg mt-32 md:mt-0">
        <p>
          We understand that everyone's journey to a healthier lifestyle is
          unique. Whether you're looking to build sustainable habits, maintain a
          healthy lifestyle, or manage health concerns like diabetes, PCOS/PCOD,
          or fatty liver, our expert-led group class program is here for you.
          Designed for people who value convenience, competition, and community,
          our home-based program helps you achieve your goals with flexibility
          and fun
        </p>
      </div>
    </div>
  );
};

export default WelcomeGroup;
