import React from "react";
import { FaDumbbell, FaHeartbeat, FaShoePrints, FaUsers, FaUtensils, FaClipboardCheck } from "react-icons/fa";

const WhyChooseHabfit = () => {
  const features = [
    {
      id: 1,
      icon: <FaDumbbell size={40} className="text-green-400" />,
      title: "Inclusive for All Goals:",
      description: "Whether you want to build habits, stay fit, or address specific health concerns, we’ve got you covered.",
    },
    {
      id: 2,
      icon: <FaHeartbeat size={40} className="text-green-400" />,
      title: "Home-Based Convenience:",
      description: "Enjoy effective workouts and support from the comfort of your home.",
    },
    {
      id: 3,
      icon: <FaUtensils size={40} className="text-green-400" />,
      title: "Nutrition and Wellness:",
      description: "Balanced meal plans and holistic strategies to improve your overall well-being.",
    },
    {
      id: 4,
      icon: <FaUsers size={40} className="text-green-400" />,
      title: "Expert-Led Programs:",
      description: "Certified trainers and dietitians guide you every step of the way with personalized and science-backed strategies.",
    },
    {
      id: 5,
      icon: <FaClipboardCheck size={40} className="text-green-400" />,
      title: "Customized Fitness Approach:",
      description: "Tailored exercises to suit your fitness level and health needs, ensuring safety and effectiveness.",
    },
    {
      id: 6,
      icon: <FaUsers size={40} className="text-green-400" />,
      title: "Community and Motivation:",
      description: "Join a supportive group of like-minded individuals with a competitive mindset to keep you inspired.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-green-400 italic text-center mb-12">
        Why Choose <span className="text-green-500">HABFIT?</span>
      </h2>

      {/* Feature Boxes */}
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
            <div className="md:ml-4 flex-shrink-0">{feature.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseHabfit;
