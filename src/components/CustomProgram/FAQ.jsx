import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center p-6 md:p-12">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-400">
          Frequently Asked Questions
        </h1>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-green-400">
                  {item.question}
                </h2>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="text-gray-300 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// FAQ Data (Updated)
const faqData = [
  {
    question: "What is this program about?",
    answer:
      "This is a fully personalized, home-based fitness program designed to help individuals improve health, build sustainable habits, and achieve weight loss or gain goals. It includes pre-recorded workout videos, a customized diet plan, and expert guidance.",
  },
  {
    question: "Who is this program for?",
    answer:
      "Ideal for busy individuals needing flexible workout schedules. Also suitable for managing PCOS, PCOD, diabetes, prediabetes, cholesterol issues, fatty liver, and injury rehabilitation.",
  },
  {
    question: "Is this program suitable for beginners?",
    answer:
      "Yes! Whether you're a beginner or experienced, the program adapts to your level and progresses gradually.",
  },
  {
    question: "Are the workouts live or pre-recorded?",
    answer:
      "The workouts are pre-recorded, allowing you to train at your convenience without being tied to a fixed schedule.",
  },
  {
    question: "How do I know if I am doing the exercises correctly?",
    answer:
      "We provide workout reference videos. You can also submit a video of your workout for posture analysis, and our trainers will provide corrections via video feedback or a one-on-one call.",
  },
  {
    question: "Will I get a customized diet plan?",
    answer:
      "Yes, every client receives a personalized diet plan based on goals, dietary preferences, and health conditions.",
  },
  {
    question: "What if I have dietary restrictions or medical conditions?",
    answer:
      "Our diet plans are fully customizable. If you have allergies, medical conditions, or specific dietary needs, we will create a plan suited for you.",
  },
  {
    question: "Do I need to track my calories?",
    answer:
      "Calorie tracking is optional, but we provide a Calorie Tracker Sheet to help you understand your intake and optimize results.",
  },
  {
    question: "Will I receive personal guidance throughout the program?",
    answer:
      "Yes! You'll have 24/7 access to a personal trainer and dietitian for continuous support, adjustments, and expert advice.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Simply click here to book your free consultation, and we'll get you started with a personalized fitness plan!",
  },
];

export default FAQ;
