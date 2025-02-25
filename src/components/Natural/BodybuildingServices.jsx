import React from "react";

const ServiceCard = ({ title, description }) => (
  <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all hover:shadow-xl hover:shadow-green-400/10">
    <h3 className="font-bold text-green-400 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const BodybuildingServices = () => {
  const services = [
    {
      title: "Personalized Workout Plans",
      description: "Tailored to your fitness level, goals, and available equipment, ensuring optimal results."
    },
    {
      title: "Comprehensive Support",
      description: "Daily follow-ups, weekly check-ins, and monthly fitness assessments to keep you on track."
    },
    {
      title: "Progressive Training",
      description: "Structured workout periodization, including deload weeks and diet breaks, to ensure continuous improvement and prevent burnout."
    },
    {
      title: "Home or Gym Flexibility",
      description: "Suitable for those with access to gym equipment or weights at home to apply progressive overload."
    },
    {
      title: "Weekly Schedule Call",
      description: "Dedicated time with your trainer to ensure adherence to training and nutrition plans."
    },
    {
      title: "Calorie and Macro Guidelines",
      description: "Customized to help you achieve your specific fitness objectives."
    },
    {
      title: "24/7 Trainer and Dietitian Access",
      description: "Get expert advice and guidance whenever you need it."
    },
    {
      title: "Posture Correction",
      description: "Client-recorded workout videos reviewed by trainers to refine your form and technique."
    },
    {
      title: "Pre-Recorded Training Program",
      description: "Access detailed workout videos tailored to your goals and fitness level."
    },
    {
      title: "Holistic Approach",
      description: "Focus on building habits, enhancing strength, and maintaining a healthy lifestyle."
    }
  ];

  return (
    <div className="bg-black text-green-400 py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-7xl w-full bg-black rounded-lg p-10 border border-green-400/30 shadow-2xl shadow-green-400/10">
        {/* Section Heading */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12 border border-green-400/20 shadow-lg">
          <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Our Natural Bodybuilding Program Services
          </h2>
        </div>

        {/* Centered Service Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-green-400 hover:bg-green-500 text-black font-bold text-lg px-8 py-3 rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodybuildingServices;
