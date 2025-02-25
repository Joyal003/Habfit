import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is the HABFIT Group Class Program?",
    answer:
      "The HABFIT Group Class Program is a structured fitness and nutrition program designed for individuals who want a flexible yet guided approach to health. It includes live group workout sessions, personalized non-live workouts, daily dietitian follow-ups, and continuous expert support.",
  },
  {
    question: "What is the workout schedule like?",
    answer:
      "• 3 Days of Live Group Classes: Engage in interactive, trainer-led sessions\n• 3 Days of Non-Live Customized Workouts: Follow structured workout plans at your convenience.",
  },
  {
    question: "Is this program suitable for beginners?",
    answer:
      "Yes! Whether you are a beginner or have prior experience with fitness, the program is tailored to your level and gradually progresses to help you achieve your goals.",
  },
  {
    question: "How long are the workout sessions?",
    answer:
      "Workouts typically last 45-60 minutes, balancing effectiveness with time efficiency.",
  },
  {
    question: "Do I need any gym equipment?",
    answer:
      "No! All workouts are home-friendly and designed for bodyweight exercises. Minimal equipment like resistance bands or dumbbells is optional.",
  },
  {
    question: "Will I get a customized diet plan?",
    answer:
      "Yes, every client receives a personalized diet plan based on their goals, dietary preferences, and health conditions.",
  },
  {
    question: "What if I have dietary restrictions or medical conditions?",
    answer:
      "Our diet plans are fully customizable. If you have allergies, medical conditions, or specific dietary preferences, we will create a plan that suits your needs.",
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


const FAQ = () => {
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

export default FAQ;