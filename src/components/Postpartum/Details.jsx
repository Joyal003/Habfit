import React from "react";

const ServiceCard = ({ title, description }) => (
  <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all hover:shadow-xl hover:shadow-green-400/10">
    <h3 className="font-bold text-green-400 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Details = () => {
  const services = [
    {
      title: "Weight Loss Programs",
      description: "Designed to help you shed excess weight safely and sustainably without compromising your health or milk supply (if breastfeeding)."
    },
    {
      title: "Core and Pelvic Floor Rehabilitation",
      description: "Strengthen your core and pelvic floor muscles to improve posture, reduce discomfort, and prevent long-term issues."
    },
    {
      title: "Diastasis Recti Recovery",
      description: "Specialized exercises to heal abdominal separation and restore functional strength."
    },
    {
      title: "Full-Body Toning",
      description: "Target stubborn areas and build lean muscle to achieve a toned, sculpted look."
    },
    {
      title: "Nutrition Guidance",
      description: "Balanced meal plans that support your recovery, energy levels, and fitness goals."
    }
  ];

  return (
    <div className="bg-black text-green-400 py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-7xl w-full bg-black rounded-lg p-10 border border-green-400/30 shadow-2xl shadow-green-400/10">
        {/* Section Heading */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12 border border-green-400/20 shadow-lg">
          <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Our Postpartum Fitness Services
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

export default Details;
