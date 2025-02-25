import React from "react";
import { motion } from "framer-motion";
import tra1 from '../../assets/transformation/1.png'
import tra2 from '../../assets/transformation/2.png'
import tra3 from '../../assets/transformation/3.png'
import tra4 from '../../assets/transformation/4.png'

const TransformationShowcase = () => {
  const transformations = [tra1, tra2, tra3, tra4];

  return (
    <div className="w-full bg-gradient-to-b from-gray-950 to-black min-h-screen py-16">
      <div className="max-w-[1400px] mx-auto px-2">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transformation Stories
          </h1>
          <p className="text-gray-300 text-lg">
            Real results, real commitment
          </p>
        </motion.div>

        {/* Single Row Transformations */}
        <div className="flex flex-nowrap gap-3 overflow-x-auto pb-6 scrollbar-hide">
          {transformations.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[325px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="overflow-hidden rounded-xl shadow-2xl bg-gray-800 p-2">
                <img 
                  src={image} 
                  alt={`Transformation ${index + 1}`} 
                  className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-4 text-center">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Transformation {index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TransformationShowcase;