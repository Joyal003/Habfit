import React from "react";
import { Link } from "react-scroll";

const ServiceCard = ({ title, description }) => (
  <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all hover:shadow-xl hover:shadow-green-400/10">
  <h3 className="font-bold text-green-400 mb-2">{title}</h3>
  <p className="text-gray-300">{description}</p>
</div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "3 Days of Live Group Classes",
      description: "Join interactive and engaging sessions with expert trainers designed to keep you motivated."
    },
    {
      title: "3 Days of Non-Live Customized Workouts",
      description: "Access personalized workout plans to follow at your convenience, tailored to your fitness level and goals."
    },
    {
      title: "Daily Dietitian Follow-Up",
      description: "Stay accountable with personalized nutrition guidance every day."
    },
    {
      title: "Weekly Check-Ins",
      description: "Track your progress and receive actionable feedback to refine your approach."
    },
    {
      title: "Monthly Fitness Assessments",
      description: "Regular evaluations to measure improvements and set new milestones."
    },
    {
      title: "24/7 Dedicated Support",
      description: "Access round-the-clock guidance from your personal trainer and dietitian."
    }
  ];

  return (
    <div  className="bg-black text-green-400 py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
    <div className="max-w-7xl w-full bg-black rounded-lg p-10 border border-green-400/30 shadow-2xl shadow-green-400/10">
      {/* Section Heading */}
        <div id="details" className="bg-gray-900/50 rounded-lg p-8 mb-12 border border-green-400/20 shadow-lg">
          <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Our Group Class Fitness Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="register" smooth={true}  duration={400}>
          <button className="bg-green-400 hover:bg-green-500 text-black font-bold text-lg px-8 py-3 rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20">
            JOIN NOW
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;