import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Who is this program for?",
    answer:
      "This program is designed for individuals looking to lose weight, gain muscle, tone their bodies, and improve endurance, flexibility, and mobility. It is ideal for those who want a structured, home-based workout and nutrition plan to make fitness a part of their lifestyle.",
  },
  {
    question: "Is this a personalized workout program?",
    answer:
      "No, the workout program consists of expert-designed pre-recorded workout videos that you can follow at your own pace. However, the diet plan is fully personalized based on your goals, preferences, and lifestyle.",
  },
  {
    question: "How is my diet plan personalized?",
    answer:
      "You will receive a one-on-one consultation call with our expert dietitian, who will assess your current lifestyle, preferences, and fitness goals to create a structured nutrition guide tailored specifically for you.",
  },
  {
    question: "Is this a group class or live training?",
    answer:
      "No, this is not a group class. All workouts are pre-recorded, and you’ll receive workout videos for reference, allowing you to train at your own pace without any fixed schedules.",
  },
  {
    question: "What equipment do I need for this program?",
    answer:
      "This program is designed for home workouts and doesn’t require a gym. You can complete the workouts using just your body weight, a water bottle, or a dumbbell for added resistance.",
  },
  {
    question: "How do I track my progress?",
    answer:
      "We provide weekly check-ins and monthly fitness assessments, where we track key metrics like body fat percentage, TDEE, BMR, and MHR to ensure you are progressing towards your goals.",
  },
  {
    question: "What if I have health conditions like PCOD, PCOS, or fatty liver, etc.?",
    answer:
      "This program is not recommended for individuals with existing health conditions such as PCOD, PCOS, fatty liver, diabetes, joint pain, or posture issues. We recommend choosing our customized program, which is tailored to your specific needs.",
  },
  {
    question: "Do I need to track my calories?",
    answer:
      "While calorie tracking is optional, we provide a Calorie Tracker Sheet to help you understand your intake and optimize your results.",
  },
  {
    question: "Will I receive personal guidance throughout the program?",
    answer:
      "Yes! You will have 24/7 access to a dedicated personal trainer and dietitian for continuous support, adjustments, and expert advice.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Simply click here to book your free consultation, and we’ll get you started with a personalized postpartum fitness plan!",
  },
];

const FAQBudget = () => {
  // Split the data into two columns
  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumnData = faqData.slice(0, midPoint);
  const rightColumnData = faqData.slice(midPoint);
  
  const [openIndices, setOpenIndices] = useState({
    left: null,
    right: null
  });
  
  const toggleFAQ = (columnType, index) => {
    setOpenIndices(prev => ({
      ...prev,
      [columnType]: prev[columnType] === index ? null : index
    }));
  };

  const FAQColumn = ({ data, columnType }) => (
    <div className="flex flex-col gap-6">
      {data.map((item, index) => (
        <div 
          key={index}
          className="bg-gray-900 rounded-lg shadow-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(columnType, index)}
        >
          <div className="flex flex-col">
            {/* Question */}
            <div className="flex justify-between items-center">
              <h2 className="text-md font-semibold text-green-400">
                {item.question}
              </h2>
              {openIndices[columnType] === index ? (
                <ChevronUp className="text-gray-400 flex-shrink-0 ml-2 w-5 h-5" />
              ) : (
                <ChevronDown className="text-gray-400 flex-shrink-0 ml-2 w-5 h-5" />
              )}
            </div>
            
            {/* Answer Container */}
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndices[columnType] === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 mt-2">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen border-b border-neutral-900 pb-20 flex justify-center items-center p-6 md:p-12 bg-black text-white">
      {/* Background Image with Blur and Gradient */}
      <div className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-black/60 before:backdrop-blur-md">
      </div>
      
      <div className="relative max-w-6xl w-full z-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-400">
          Frequently Asked Questions
        </h1>
        
        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FAQColumn data={leftColumnData} columnType="left" />
          <FAQColumn data={rightColumnData} columnType="right" />
        </div>
      </div>
    </div>
  );
};

export default FAQBudget;