import React, { useState, useEffect } from "react";

const ConsultForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScs5YTtF8V9cvuvuaBoe78BBTczswEbXCxt6TiUrAIvRp2F3g/formResponse";

    const formBody = new URLSearchParams({
      "entry.1578831861": formData.fullName,
      "entry.938295217": formData.phoneNumber,
      "entry.1622120452": formData.email,
    }).toString();

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody,
      });

      alert("Form submitted successfully!");
      setFormData({ fullName: "", phoneNumber: "", email: "" });
    } catch (error) {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div  className="min-h-screen bg-black text-white px-4 py-8 md:py-12">
      <div className="max-w-8xl mx-auto">
        <div
          className="md:backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `
            linear-gradient(to bottom, black, rgba(0, 0, 0, 0.3), black), 
            linear-gradient(to right, black, rgba(0, 0, 0, 0.3), black), 
            url('https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundBlendMode: "overlay",
          }}
        >
          <div id="register" className="w-full bg-gradient-to-r from-emerald-900/50 to-emerald-900/50 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Submit Details for Free Consultation
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row p-6 md:p-8 gap-8">
            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-lg mb-2">
                    <span className="text-green-400 font-semibold">Step 1:</span>{" "}
                    Free Consultation
                  </p>
                  <p className="text-gray-300">
                    Schedule a one-on-one consultation with our experts.
                  </p>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-lg mb-2">
                    <span className="text-green-400 font-semibold">Step 2:</span>{" "}
                    Personalized Plan
                  </p>
                  <p className="text-gray-300">
                    Receive a tailored fitness and nutrition plan.
                  </p>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-lg mb-2">
                    <span className="text-green-400 font-semibold">Step 3:</span>{" "}
                    Progress & Support
                  </p>
                  <p className="text-gray-300">
                    Get ongoing support and adjustments.
                  </p>
                </div>

                <div className="p-10  bg-gradient-to-r from-green-900/20 to-gray-900 rounded-xl">
                  <p className="text-red-700 text-2xl font-bold">
                    Register now for FREE bonuses worth ₹3,500!
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-black/40 md:backdrop-blur-sm rounded-xl p-6">
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
                      placeholder="Enter your email"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-lg transform transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    Register Now
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <div className="inline-block bg-black/50 rounded-xl p-4">
                    <p className="text-lg font-semibold text-red-400 mb-2">
                      OFFER EXPIRES IN
                    </p>
                    <p className="text-3xl font-bold text-red-500">
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

export default ConsultForm;
