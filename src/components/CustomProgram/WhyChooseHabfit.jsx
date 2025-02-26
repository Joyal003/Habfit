import React from "react";
import { FaDumbbell, FaHeartbeat, FaShoePrints, FaCalendarAlt, FaHome, FaUtensils, FaBell } from "react-icons/fa";

const WhyChooseHabfit = () => {
  const features = [
    {
      id: 1,
      icon: <FaDumbbell size={40} className="text-green-400" />,
      title: "Customized Pre-Recorded Workouts:",
      description: "Flexible sessions designed to fit your schedule and goals.",
    },
    {
      id: 2,
      icon: <FaBell size={40} className="text-green-400" />,
      title: "Daily Follow-Up & Reminders:",
      description: "Stay accountable with consistent communication and support.",
    },
    {
      id: 3,
      icon: <FaShoePrints size={40} className="text-green-400" />,
      title: "24/7 Access to Experts:",
      description: "Reach out to your personal trainer and dietitian anytime for guidance.",
    },
    {
      id: 4,
      icon: <FaUtensils size={40} className="text-green-400" />,
      title: "Personalized Nutrition Plans:",
      description: "Meal plans created to meet your specific dietary needs and preferences.",
    },
    {
      id: 5,
      icon: <FaCalendarAlt size={40} className="text-green-400" />,
      title: "Weekly Check-Ins & Monthly Assessments:",
      description: "Regular evaluations to ensure you’re on track.",
    },
    {
      id: 6,
      icon: <FaHome size={40} className="text-green-400" />,
      title: "Home-Based Convenience:",
      description: "All workouts and plans are designed to be effective from the comfort of your home.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-green-400 italic text-center mb-12">
        Why Choose <span className="text-green-500">HABFIT?</span>
      </h2>

      {/* Feature Boxes  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="border border-gray-500 p-6 rounded-lg hover:shadow-lg transition-shadow flex flex-col md:flex-row-reverse items-center md:items-start gap-4 text-center md:text-left"
          >
            {/* Feature Content */}
            <div className="flex-1">
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </div>

            {/* Icon (Right on Desktop, Below on Mobile) */}
            {feature.icon && (
              <div className="md:ml-4 flex-shrink-0">{feature.icon}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseHabfit;
