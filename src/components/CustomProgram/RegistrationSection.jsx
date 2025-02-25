import React, { useState, useEffect } from "react";

const JourneyForm = () => {
  const [timeLeft, setTimeLeft] = useState(620);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen  pb-5 bg-black p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-500 text-center mb-4">
          Your Journey to a Healthier You Starts Here
        </h1>
        <h3 className="text-xl text-white sm:text-2xl font-bold mt-3 mb-5 text-center">
          Submit Your Details
        </h3>

        <div className="flex flex-col md:flex-row gap-24 items-start">
          {/* Left side content */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Previous content remains the same */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-xl font-bold">
                  Step 1: Free Consultation:
                </h3>
                <p className="text-white text-lg">
                  Schedule a one-on-one consultation to discuss your goals,
                  lifestyle, and any health concerns.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl font-bold">
                  Step 2: Personalized Plan:
                </h3>
                <p className="text-white text-lg">
                  Receive a tailored fitness and nutrition plan to suit your
                  unique needs.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl font-bold">
                  Step 3: Progress & Support:
                </h3>
                <p className="text-white text-lg">
                  Enjoy continuous guidance, regular check-ins, and program
                  adjustments as you progress.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-white text-2xl">Price For You : 1000</p>

              <div className="relative inline-block">
                <p className="text-red-400 text-2xl">Normal Price : 5000/-</p>
                <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-red-600 -translate-x-1/2 -translate-y-1/2 transform rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-red-600 -translate-x-1/2 -translate-y-1/2 transform -rotate-12"></div>
              </div>
            </div>
          </div>

          {/* Right side with form and timer */}
          <div className="bg-white text-black p-6 rounded-xl lg:mt-12 shadow-lg max-w-md w-full">
            <form>
              <label className="block mb-3">
                <span className="text-gray-700">Full Name *</span>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </label>

              <label className="block mb-3">
                <span className="text-gray-700">Phone Number *</span>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </label>

              <label className="block mb-3">
                <span className="text-gray-700">Email Address *</span>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </label>

              <button
                type="submit"
                className="bg-green-500 text-black font-bold py-2 px-6 rounded-full w-full hover:bg-green-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
          <div className="mt-8 text-center">
            <div className="inline-block bg-black/50 rounded-xl p-4">
              <p className="text-lg font-semibold text-red-400 mb-2">
                OFFER EXPIRES IN
              </p>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                {formatTime(timeLeft)}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default JourneyForm;
