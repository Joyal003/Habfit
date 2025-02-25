import React from "react";
import cardimage from "../../assets/calorie-ebook.png";

const BonusItem = ({ title, description, worth }) => (
  <div className="group p-4 rounded-lg transition-all hover:bg-gray-900/30">
    <h3 className="font-bold text-emerald-400 text-lg mb-2 group-hover:translate-x-1 transition-transform">
      • {title}
    </h3>
    <p className="text-gray-300 text-sm mb-2 pl-4">{description}</p>
    <p className="text-red-500 font-bold pl-4 opacity-90">Worth Rs {worth}/-</p>
  </div>
);

const BodybuildingBonuses = () => {
  const bonuses = [
    {
      title: "HABFIT Ultimate Training Ebook",
      description: "Understand workout principles and techniques.",
      worth: "2000",
    },
    {
      title: "HABFIT Nutrition Ebook",
      description: "Learn how to track calories and macros effectively.",
      worth: "2000",
    },
    {
      title: "HABFIT Recipe Ebook (100 Cooking Recipes)",
      description: "A comprehensive guide featuring healthy, customized recipes with macros and calorie details.",
      worth: "2000",
    },
    {
      title: "Progress Tracker Sheet",
      description: "Monitor your measurements, body fat, TDEE, BMR, and progress over time.",
      worth: "2000",
    },
    {
      title: "Workout Tracker Sheet",
      description: "Calculate progressive overload and weekly training loads for continuous improvement.",
      worth: "2000",
    },
    {
      title: "Daily Tracker Sheet",
      description: "Track daily weight and steps to meet weekly goals effectively.",
      worth: "1000",
    },
    {
      title: "Calorie Tracker Sheet",
      description: "Log daily calorie and macro intake to optimize your weekly targets.",
      worth: "1000",
    },
    {
      title: "Food Macro List",
      description: "Ensure accurate food tracking and adjustments.",
      worth: "500",
    },
  ];

  const totalWorth = 12500;

  return (
    <div
      className="bg-black text-emerald-400 py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, black, rgba(0, 0, 0, 0.7), black), 
                          url('https://cdn.pixabay.com/photo/2016/08/10/20/36/mockup-1584227_1280.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with subtle line decoration */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Bonuses Included
          </h2>
          <div className="h-1 flex-grow rounded-full bg-gradient-to-r from-emerald-400/20 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {/* Left Column: First Four Bonuses + Total Worth */}
          <div className="space-y-6">
            {bonuses.slice(0, 4).map((bonus, index) => (
              <BonusItem key={index} {...bonus} />
            ))}

            {/* Total Worth Section */}
            <div className="p-6 bg-gradient-to-r from-gray-900/50 to-transparent rounded-lg mt-8">
              <div className="flex flex-col items-start">
                <p className="text-red-500 text-2xl font-bold mb-2">TOTAL WORTH</p>
                <div className="flex items-baseline gap-3">
                  <p className="text-red-500 text-4xl font-bold">RS {totalWorth}/-</p>
                  <p className="text-emerald-400 text-2xl font-bold">(FREE)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Last Four Bonuses + Image */}
          <div className="space-y-6">
            {bonuses.slice(4, 8).map((bonus, index) => (
              <BonusItem key={index + 4} {...bonus} />
            ))}

            {/* Image */}
            {/* <div className="flex justify-center mt-8">
              <img src={cardimage} alt="HABFIT Program Materials" className="w-full max-w-md rounded-lg shadow-lg" />
            </div> */}
          </div>
        </div>

        {/* Join Now Button */}
        <div className="text-center mt-12">
          <button className="bg-emerald-400 text-black px-8 py-3 rounded-full text-xl font-bold hover:bg-emerald-300 transition-colors">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodybuildingBonuses;
