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
      title: "Personalized Fitness Plans",
      description: "Customized pre-recorded workout videos tailored to your goals and fitness level."
    },
    {
      title: "Custom Diet Programs",
      description: "Nutrition plans crafted to suit your individual needs and goals."
    },
    {
      title: "Special Considerations",
      description: "Ideal for individuals with injuries, posture issues, or specific health conditions."
    },
    {
      title: "Daily Support",
      description: "Receive daily follow-ups and reminders to stay on track."
    },
    {
      title: "Monthly Fitness Assessments",
      description: "Regular evaluations to measure improvements and set new milestones."
    },
    {
      title: "Goal-Oriented Habit Building",
      description: "Set and achieve weekly targets, such as step counts or weight goals."
    },
    {
      title: "Expert Guidance",
      description: "24/7 access to a dedicated personal trainer and dietitian for continuous support."
    },
    {
      title: "Workout Periodization",
      description: "Structured programs to ensure steady progress and prevent plateaus."
    },
    {
      title: "Flexible Scheduling",
      description: "Choose your workout frequency—2 to 6 days per week—at times that work best for you."
    },
    {
      title: "Weekly Check-Ins",
      description: "Track your progress and receive actionable feedback to refine your approach."
    },
    {
      title: "Regular Assessments",
      description: "Weekly check-ins and monthly fitness assessments to monitor progress."
    }
  ];

  return (
    <div id="details" className="bg-black text-green-400 py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-7xl w-full bg-black rounded-lg p-10 border border-green-400/30 shadow-2xl shadow-green-400/10">
        {/* Section Heading */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12 border border-green-400/20 shadow-lg">
          <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Our Customized Program Services
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
