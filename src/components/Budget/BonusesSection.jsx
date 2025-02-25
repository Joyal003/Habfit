import React from "react";

const BonusItem = ({ title, description, worth }) => (
  <div className="group p-4 rounded-lg transition-all hover:bg-gray-900/30">
    <h3 className="font-bold text-emerald-400 text-lg mb-2 group-hover:translate-x-1 transition-transform">
      • {title}
    </h3>
    <p className="text-gray-300 text-sm mb-2 pl-4">{description}</p>
    <p className="text-red-500 font-bold pl-4 opacity-90">Worth Rs {worth}/-</p>
  </div>
);

const BonusesSection = () => {
  const bonuses = [
    {
      title: "Ultimate HABFIT Recipe Guide (100 Cooking Recipes)",
      description: "A 104-page guide featuring healthy, customized recipes complete with macros and calorie details. Choose meals that align with your calorie needs.",
      worth: "2000"
    },
    {
      title: "Progress Tracker Sheet",
      description: "Track your measurements, automatically calculate body fat, TDEE, BMR, and heart rate zones. Monitor your progress from the start and assess how well you’re improving.",
      worth: "2000"
    },
    {
      title: "Daily Tracker Sheet",
      description: "Log your daily weight and steps to calculate weekly averages. Use this data to adjust and achieve your weekly step targets effectively.",
      worth: "500"
    },
    {
      title: "Calorie Tracker Sheet",
      description: "Enter your daily calorie and macro intake to get a weekly average. Use this insight to tweak your intake and hit your goals efficiently.",
      worth: "500"
    }
  ];

  return (
    <div
      className="bg-black text-emerald-400 py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, black, rgba(0, 0, 0, 0.7), black), 
                          url('https://imgs.search.brave.com/JoVgPptpI2aGZd_j9VdDMIWh6nJ5myF9VoU52dc_egU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/V29ya2luZy1PdXQt/V2l0aC1DaGFsay5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w')`,
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
          {/* Left Column: First Two Bonuses + Total Worth */}
          <div className="space-y-6">
            {bonuses.slice(0, 2).map((bonus, index) => (
              <BonusItem
                key={index}
                title={bonus.title}
                description={bonus.description}
                worth={bonus.worth}
              />
            ))}

            {/* Total Worth Section */}
            <div className="p-6 bg-gradient-to-r from-gray-900/50 to-transparent rounded-lg mt-8">
              <div className="flex flex-col items-start">
                <p className="text-red-500 text-2xl font-bold mb-2">TOTAL WORTH</p>
                <div className="flex items-baseline gap-3">
                  <p className="text-red-500 text-4xl font-bold">RS 5000/-</p>
                  <p className="text-emerald-400 text-2xl font-bold">(FREE)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Last Two Bonuses */}
          <div className="space-y-6">
            {bonuses.slice(2, 4).map((bonus, index) => (
              <BonusItem
                key={index + 2}
                title={bonus.title}
                description={bonus.description}
                worth={bonus.worth}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusesSection;
