import React, { useState, useEffect } from "react";

const FitnessForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const [timeLeft, setTimeLeft] = useState(620); // 1 hr 59 min 53 sec

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
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black text-white p-6">
      {/* Left Side Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-green-400 mb-4">
          Your Postpartum Fitness Journey Starts Here
        </h1>
        <h2 className="text-2xl font-bold text-green-300 mb-6">
          Submit Your Details
        </h2>

        <p className="text-lg mb-4">
          <strong className="text-white">Step 1: Free Consultation:</strong> Schedule a one-on-one consultation with our experts to discuss your goals and challenges.
        </p>
        <p className="text-lg mb-4">
          <strong className="text-white">Step 2: Personalized Plan:</strong> Receive a tailored fitness and nutrition plan that aligns with your lifestyle.
        </p>
        <p className="text-lg mb-6">
          <strong className="text-white">Step 3: Progress & Support:</strong> Enjoy ongoing support, regular check-ins, and adjustments to your plan as you progress.
        </p>

        <p className="text-2xl font-semibold">
          Price for you: <span className="text-white font-bold">2999/-</span>
        </p>
        <p className="text-xl line-through text-red-500">
          Normal Price: <span className="text-gray-400">8000/-</span>
        </p>
        <p className="text-red-500 text-lg font-bold mt-2">
          Register Today To Unlock Bonuses For FREE Worth RS 3500/-
        </p>
      </div>

      {/* Right Side Form + Timer */}
      <div className="w-full lg:w-1/2 flex flex-col items-center mt-8 lg:mt-0">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <label className="block text-black font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border text-black  border-gray-300 rounded"
          />

          <label className="block text-black font-medium mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border text-black border-gray-300 rounded"
          />

          <label className="block text-black font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-6 p-3 border text-black border-gray-300 rounded"
          />

          <button
            type="submit"
            className="w-full  bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg"
          >
            Submit
          </button>
        </form>

        {/* Countdown Timer - Positioned Directly Below the Form */}
        <div className="mt-6 text-center border rounded-lg p-2  border-neutral-400">
          <p className="text-lg font-semibold text-white">PRICE INCREASE IN</p>
          <p className="text-red-500 text-3xl font-bold bg-black px-6 py-2 rounded-lg">
            {formatTime(timeLeft)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FitnessForm;
