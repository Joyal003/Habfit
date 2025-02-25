import React from "react";
import { BsCalendar2MonthFill } from "react-icons/bs";
import { FaDumbbell, FaHeartbeat, FaShoePrints, FaCalendarAlt, FaUtensils } from "react-icons/fa";

const WhyChooseHabfit = () => {
  const features = [
    {
      id: 1,
      icon: <FaDumbbell size={40} className="text-green-400" />,
      title: "Pre-Recorded Training Program:",
      description: "Access detailed workout videos tailored to your goals and fitness level.",
    },
    {
      id: 2,
      icon: <FaHeartbeat size={40} className="text-green-400" />,
      title: "Personalized Diet Plan:",
      description: "Calorie and macro breakdowns to align with your fitness targets.",
    },
    {
      id: 3,
      icon: <FaShoePrints size={40} className="text-green-400" />,
      title: "Daily Follow-Ups:",
      description: "Stay accountable with consistent reminders and feedback.",
    },
    {
      id: 4,
      icon: <FaCalendarAlt size={40} className="text-green-400" />,
      title: "Weekly Check-Ins:",
      description: "Regular progress evaluations to refine your approach.",
    },
    {
      id: 5,
      icon: <BsCalendar2MonthFill  size={40} className="text-green-400" />,
      title: "Monthly Fitness Assessments:",
      description: "Comprehensive reviews to measure improvements and set new goals.",
    },
    {
      id: 6,
      icon: <FaUtensils size={40} className="text-green-400" />,
      title: "Auto-Regulation:",
      description: "Adjustments for diet breaks and deload weeks to optimize recovery and progress.",
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
