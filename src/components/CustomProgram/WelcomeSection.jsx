import React from "react";

const WelcomeSection = () => {
  return (
    <div
    className="relative w-full h-screen text-white flex flex-col items-center justify-center px-10"
    style={{
      backgroundImage: `
        linear-gradient(to bottom, black, rgba(0, 0, 0, 0.3), black), 
        linear-gradient(to right, black, rgba(0, 0, 0, 0.3), black), 
        url('https://cdn.pixabay.com/photo/2021/01/04/06/20/man-5886570_1280.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
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
        <h3 className="text-base md:text-xl font-semibold mt-1">
          Transform Your Lifestyle, Embrace Wellness
        </h3>
      </div>

      {/* Responsive Description Box */}
      <div className="w-full max-w-2xl md:max-w-4xl border backdrop-blur-sm border-green-400 p-6 md:p-8 text-sm md:text-lg text-justify bg-black bg-opacity-70 rounded-lg mt-20 md:mt-0">
        <p>
          Our Customized Transformation Program is designed for individuals who
          want to build healthy habits, achieve fitness goals, and maintain a
          sustainable lifestyle. Whether your focus is weight loss, body toning,
          weight gain, injury recovery, posture correction, or managing health
          issues, this program is tailored to fit your unique needs. Perfect for
          home workouts, it’s flexible, comprehensive, and designed for
          long-term success.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
