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
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg p-4 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{item.question}</h2>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// FAQ Data
const faqData = [
  { question: "Who is this postpartum fitness program for?", answer: "This program is designed for new mothers who want to regain strength, lose weight safely, and improve wellness after childbirth." },
  { question: "Do I need any gym equipment for this program?", answer: "No, our program is home-based and requires no equipment. All exercises use body weight and safe, effective movements." },
  { question: "Will this program help with diastasis recti recovery?", answer: "Yes! Our program includes specific exercises to help heal diastasis recti, strengthen the core, and rebuild abdominal muscles safely." },
  { question: "Is this program safe for breastfeeding mothers?", answer: "Absolutely! Our workouts and nutrition plans are designed to support breastfeeding mothers." },
  { question: "What if I have no prior fitness experience?", answer: "No worries! This program is perfect for beginners with step-by-step guidance and modifications." },
  { question: "What is the schedule for workouts?", answer: "There is no fixed time! Our program includes pre-recorded workouts, allowing you to exercise at your convenience." },
  { question: "Will I get video references for exercises?", answer: "Yes! We provide detailed workout videos to help you understand the correct form and execution." },
  { question: "What if I need support or have doubts?", answer: "You'll have 24/7 trainer and dietitian support, plus weekly check-ins to track progress and make adjustments." },
  { question: "How do I sign up?", answer: "Simply click here to book your free consultation, and we'll get you started with a personalized postpartum fitness plan!" },
];

export default FAQ;