import React, { useState } from "react";
import { motion } from "framer-motion";
import tra1 from '../../assets/transformation/1.png'
import tra2 from '../../assets/transformation/2.png'
import tra3 from '../../assets/transformation/3.png'
import tra4 from '../../assets/transformation/4.png'
import { Link } from "react-scroll";

const TransformationShowcase = () => {
  // Array of transformation images with additional data
  const transformations = [
    { 
      id: 1, 
      image: tra1, 
      label: "Strength Journey", 
      weeks: 12, 
      weightLoss: "15kg",
      muscleGain: "8kg",
      story: "From skinny to strong in just 3 months of dedicated training."
    },
    { 
      id: 2, 
      image: tra2, 
      label: "Weight Loss Champion", 
      weeks: 16, 
      weightLoss: "22kg",
      muscleGain: "4kg",
      story: "Transformed physique with consistent diet and exercise routine."
    },
    { 
      id: 3, 
      image: tra3, 
      label: "Muscle Definition", 
      weeks: 10, 
      weightLoss: "8kg",
      muscleGain: "12kg",
      story: "Achieved amazing muscle definition through progressive overload."
    },
    { 
      id: 4, 
      image: tra4, 
      label: "Total Body Transformation", 
      weeks: 14, 
      weightLoss: "18kg",
      muscleGain: "10kg",
      story: "Complete lifestyle change resulting in dramatic physical improvement."
    }
  ];

  const [activeCard, setActiveCard] = useState(null);

  // Stats data for info cards
  const statsCards = [
    { 
      title: "Training Accuracy", 
      value: "97%", 
      description: "Our training programs are scientifically designed for maximum results",
      icon: "📊"
    },
    { 
      title: "Success Rate", 
      value: "92%", 
      description: "Clients who achieve their fitness goals with our programs",
      icon: "🏆"
    },
    { 
      title: "Average Timeline", 
      value: "13 Weeks", 
      description: "Typical timeframe to see significant transformation results",
      icon: "⏱️"
    },
    { 
      title: "Satisfaction", 
      value: "4.9/5", 
      description: "Based on feedback from over 1,000 transformation journeys",
      icon: "⭐"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Transformation Stories
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Real results from real people who committed to changing their lives
          </p>
        </motion.div>

        {/* Large Transformation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 h-full transform transition-all duration-300 hover:shadow-blue-500/20">
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Large Image */}
                  <div className="md:w-3/5 relative">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={`Transformation ${item.id}`} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-br-lg font-bold">
                        #{item.id}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Content */}
                  <div className="md:w-2/5 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-bold text-2xl mb-4 border-b border-gray-700 pb-3">{item.label}</h3>
                      <p className="text-gray-300 mb-6">{item.story}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800 bg-opacity-40 rounded-lg p-3">
                          <div className="text-lg font-bold text-white mb-1">{item.weeks} Weeks</div>
                          <div className="text-gray-400 text-sm">Program Duration</div>
                        </div>
                        <div className="bg-gray-800 bg-opacity-40 rounded-lg p-3">
                          <div className="text-lg font-bold text-white mb-1">{item.weightLoss}</div>
                          <div className="text-gray-400 text-sm">Fat Loss</div>
                        </div>
                        <div className="bg-gray-800 bg-opacity-40 rounded-lg p-3">
                          <div className="text-lg font-bold text-white mb-1">{item.muscleGain}</div>
                          <div className="text-gray-400 text-sm">Muscle Gain</div>
                        </div>
                        <div className="bg-gray-800 bg-opacity-40 rounded-lg p-3">
                          <div className="text-lg font-bold text-white mb-1">98%</div>
                          <div className="text-gray-400 text-sm">Consistency</div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 rounded-lg mt-auto hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                      View Full Journey
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Cards Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Program Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-blue-400 mb-3">{stat.title}</div>
                <div className="text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-gradient-to-r from-gray-800 to-gray-900 p-10 rounded-2xl border border-gray-700 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our community of transformation success stories and experience the power of personalized fitness coaching.
          </p>
           <Link to="register" smooth={true}  duration={200}>
          <button className="relative overflow-hidden group px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25">
            <span className="relative z-10">Start Your Journey</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TransformationShowcase;