import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  Calendar,
  Trophy,
  PiggyBank,
  Brain,
  ArrowRightCircle,
} from "lucide-react";
import logo from "./../assets/logo.png";
import habfitVideo from "./../assets/homepagevideo.mp4";
import phoneFrame from "./../assets/tablet.png";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Delay animations until assets are loaded
  useEffect(() => {
    const onLoad = () => setIsLoaded(true);
    
    // Check if page is already loaded
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Features data outside of render function
  const features = [
    {
      title: "Science-Backed Training",
      description: "Every program is designed using proven, evidence-based fitness principles.",
      icon: Dumbbell,
      delay: 0.2,
    },
    {
      title: "Expert Coaches",
      description: "Our trainers are highly skilled professionals with deep expertise in fitness, nutrition, and habit formation.",
      icon: Users,
      delay: 0.3,
    },
    {
      title: "Personalized Plans",
      description: "Tailored workouts and nutrition guidance based on your goals, fitness level, and lifestyle.",
      icon: Trophy,
      delay: 0.4,
    },
    {
      title: "Flexible Scheduling",
      description: "Train anytime, anywhere with customized plans that fit your routine.",
      icon: Calendar,
      delay: 0.5,
    },
    {
      title: "Affordable & Accessible",
      description: "Quality coaching at a price that makes fitness available to everyone.",
      icon: PiggyBank,
      delay: 0.6,
    },
    {
      title: "Holistic Approach",
      description: "We focus on overall well-being, including mindset, habit-building, and sustainable progress.",
      icon: Brain,
      delay: 0.7,
    },
  ];

  // CSS background style
  const bgStyle = {
    backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.8)), 
      url('https://images.pexels.com/photos/8980916/pexels-photo-8980916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="relative w-full min-h-screen text-white overflow-hidden lg:pb-10 bg-black"
      style={bgStyle}
    >
      {/* Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute -top-6 left-6 z-50"
      >
        <img 
          src={logo} 
          alt="HABFIT Logo" 
          className="h-32 sm:h-40 md:h-48 object-contain"
          loading="eager"
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row items-start justify-between w-full px-4 sm:px-6 md:px-12 lg:px-16 pt-32 sm:pt-36 min-h-screen">
        {/* Left Side Content */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full lg:w-1/2 space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-emerald-400/20"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Motivation Fades But Habit Lasts
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-3 sm:mt-4">
              <p className="text-sm sm:text-base md:text-lg text-emerald-400">
                Start Your Transformation Today
              </p>
              <Link to="register" smooth={true}  duration={400}>
                <button className="mt-4 sm:mt-0 bg-emerald-400 text-black px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold 
                  rounded-full flex items-center gap-2 hover:bg-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-400/50">
                  JOIN NOW
                  <ArrowRightCircle size={20} />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: (isLoaded ? feature.delay : 0) }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-emerald-400/20 
                  hover:border-emerald-400/40 transition-all duration-300 ease-out 
                  shadow-lg hover:shadow-emerald-400/50"
              >
                <div className="flex items-start space-x-3">
                  <div className="text-emerald-400 flex-shrink-0 mt-1">
                    <feature.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-emerald-400">
                      {feature.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2 mt-8 lg:mt-5 flex flex-col items-center"
        >
          {/* Captions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-4 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 mb-2">
              Your Partner in Building Healthy Habits
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl text-emerald-400/80">
              Transform Your Lifestyle, Embrace Wellness
            </h3>
          </motion.div>

          {/* Phone Frame and Video Container */}
          <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] mx-auto">
            {/* Phone Frame */}
            <img
              src={phoneFrame}
              alt="Phone Frame"
              className="w-full h-auto relative z-10"
              loading="eager"
            />
            
            {/* Video Container */}
            <div className="absolute top-[7%] left-[16%] w-[68%] h-[86%] overflow-hidden rounded-lg z-0">
              <video
                src={habfitVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;