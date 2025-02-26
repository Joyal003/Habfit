import React, { useState, useEffect } from "react";

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div id="register" className="min-h-screen bg-black text-white px-4 py-8 md:py-12">
      <div className="max-w-8xl mx-auto">
        {/* Main Container */}
        <div
          className="md:backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `
            linear-gradient(to bottom, black, rgba(0, 0, 0, 0.3), black), 
            linear-gradient(to right, black, rgba(0, 0, 0, 0.3), black), 
            url('https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundBlendMode: "overlay",
          }}
        >
          {/* Header Section */}
          <div className="w-full bg-gradient-to-r from-emerald-900/50 to-emerald-900/50 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Your Journey to Healthier Starts Here
            </h1>
          </div>

          {/* Content Container */}
          <div className="flex flex-col lg:flex-row p-6 md:p-8 gap-8">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-lg mb-2">
                    <span className="text-green-400 font-semibold">Step 1:</span>{" "}
                    Free Consultation
                  </p>
                  <p className="text-gray-300">
                    Schedule a one-on-one consultation with our experts to discuss your goals.
                  </p>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-lg mb-2">
                    <span className="text-green-400 font-semibold">Step 2:</span>{" "}
                    Personalized Plan
                  </p>
                  <p className="text-gray-300">
                    Receive a tailored fitness and nutrition plan for your lifestyle.
                  </p>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-lg mb-2">
                    <span className="text-green-400 font-semibold">Step 3:</span>{" "}
                    Progress & Support
                  </p>
                  <p className="text-gray-300">
                    Enjoy ongoing support and regular plan adjustments as you progress.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl">
                  <p className="text-2xl font-semibold mb-2">
                    Special Price: <span className="text-green-400 font-bold">₹3,999</span>
                  </p>
                  <p className="text-lg line-through text-red-400 mb-2">
                    Regular Price: <span>₹10,000</span>
                  </p>
                  <p className="text-red-700 text-2xl font-bold">
                    Register now for FREE bonuses worth ₹5,000!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div id="register" className="w-full lg:w-1/2">
              <div className="bg-black/40 md:backdrop-blur-sm  rounded-xl p-6">
                <h2 className="text-xl md:text-2xl font-bold text-center text-green-400 mb-6">
                  Register Now
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-green-400 font-medium mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-green-400 font-medium mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-green-400 font-medium mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-lg transform transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    Register Now
                  </button>
                </form>

                {/* Timer */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;
