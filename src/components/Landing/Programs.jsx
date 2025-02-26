import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import image1 from '../../assets/Programs/4.png';
import grpimage from '../../assets/Programs/3.png';

// Program data moved outside component to prevent recreation on each render
const programData = [
  {
    title: "Weight Loss & Weight Gain Program",
    image: image1, // Local image
    details: [
      "Customized program for home workouts",
      "Minimal equipment required",
      "Ideal for those with joint pain or other lifestyle-related conditions",
      "Flexible & time-efficient for busy individuals",
    ],
    path: "/budget",
    color: "from-emerald-500/20 to-emerald-700/20"
  },
  {
    title: "POSTPARTUM FITNESS PROGRAM",
    image: "https://images.pexels.com/photos/4753989/pexels-photo-4753989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: [
      "Rebuild Strength & Confidence After Childbirth",
      "Gentle, Effective Workouts for Postpartum Recovery",
      "Support for Core, Pelvic Floor & Diastasis Recti",
      "Flexible & Time-Efficient for Busy Moms",
      "Personalized Plans for Every Stage of Recovery",
    ],
    path: "/post",
    color: "from-pink-500/20 to-pink-700/20"
  },
  {
    title: "Group Class Program",
    image: grpimage, // Local image
    details: [
      "A perfect blend of strength & cardio training to boost endurance and fitness",
      "3 live sessions + 3 customized recorded workouts for flexibility",
      "Ideal for those who enjoy training in a motivating group setting",
      "Live expert guidance + a tailored nutrition plan",
    ],
    path: "/group",
    color: "from-blue-500/20 to-blue-700/20"
  },
  {
    title: "NATURAL BODY BUILDING PROGRAM",
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg",
    details: [
      "Build a lean, strong physique naturally with our science-backed 16-week transformation program",
      "Perfect for those training at the gym or home with access to weights",
      "Proven progressive overload methods for consistent muscle growth and strength gains",
      "Break Plateaus & Maximize Gains - Smart deloading, structured progression, and real results.",
    ],
    path: "/natural",
    color: "from-purple-500/20 to-purple-700/20"
  },
  {
    title: "PCOD, PCOS MANAGEMENT PROGRAM",
    image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
    details: [
      "Low-impact strength training, mobility, and cardio to improve insulin sensitivity and metabolism",
      "Workouts and diet adapted to your menstrual cycle for better results",
      "Stress & Sleep Support - Simple techniques like breathing exercises and better sleep habits for hormone balance",
      "Weekly check-ins, symptom tracking, and ongoing adjustments to keep you on the right path.",
    ],
    path: "/custom",
    color: "from-rose-500/20 to-rose-700/20"
  },
  {
    title: "LIFESTYLE DISEASES MANAGEMENT PROGRAM",
    image: "https://images.pexels.com/photos/7672096/pexels-photo-7672096.jpeg",
    details: [
      "Suitable for those with fatty liver, diabetes, joint pain, high blood pressure, obesity, or unhealthy lifestyle habits.",
      "Customized Workout & Diet Plans - Tailored to your specific condition, fitness level, and goals",
      "Designed to fit your schedule and energy levels. Includes stress management, improved sleep habits, and guidance on making healthier choices daily.",
      "Regular Progress Tracking - Adjustments based on your body's response for better results.",
    ],
    path: "/custom",
    color: "from-amber-500/20 to-amber-700/20"
  },
  {
    title: "FITNESS FOR EVERYONE",
    image: "https://images.pexels.com/photos/7689284/pexels-photo-7689284.jpeg",
    details: [
      "Affordable Program We believe fitness should fit everyone's budget.",
      "Lose weight, gain muscle, tone up, or improve endurance, flexibility, and mobility.",
      "Pre-recorded Sessions Train anytime, anywhere with structured workouts.",
      "Customized Diet & Nutrition Plan Tailored to support your fitness journey",
    ],
    path: "/custom",
    color: "from-teal-500/20 to-teal-700/20"
  },
];

const Programs = () => {
  const scrollContainer = useRef(null);
  const navigate = useNavigate();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = programData.length;

  // Track image loading progress
  const handleImageLoad = useCallback(() => {
    setImagesLoaded(prev => {
      const newCount = prev + 1;
      // Consider component loaded when at least the first 3 images are ready
      if (newCount >= Math.min(3, totalImages)) {
        setIsLoaded(true);
      }
      return newCount;
    });
  }, [totalImages]);

  // Check if we can scroll left or right
  const checkScroll = useCallback(() => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px threshold
    }
  }, []);

  // Handle scrolling
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Set up event listeners
  useEffect(() => {
    checkScroll();
    const container = scrollContainer.current;
    
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      
      // Check if page is already loaded
      if (document.readyState === 'complete') {
        setIsLoaded(true);
      } else {
        window.addEventListener('load', () => setIsLoaded(true));
      }
      
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        window.removeEventListener('load', () => setIsLoaded(true));
      };
    }
  }, [checkScroll]);

  // Preload all images
  useEffect(() => {
    // Initialize an array of Image objects to preload
    programData.forEach(program => {
      if (typeof program.image === 'string') {
        const img = new Image();
        img.src = program.image;
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad; // Count errors as loaded to prevent getting stuck
      } else {
        // For imported images (already loaded)
        handleImageLoad();
      }
    });
  }, [handleImageLoad]);

  return (
    <div className="w-full min-h-screen bg-black text-white py-12 px-4 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-4">
            Choose Your Program
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            At HABFIT, we don't just help you work out—we help you build habits that last a lifetime.
            Transform your life with our expertly crafted programs.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence>
            {canScrollLeft && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-emerald-500 p-3 rounded-full shadow-lg hover:bg-emerald-600 z-20 hidden sm:block backdrop-blur-sm"
                onClick={scrollLeft}
              >
                <ChevronLeft size={24} className="text-black" />
              </motion.button>
            )}
          </AnimatePresence>

          <div
            ref={scrollContainer}
            className="flex overflow-x-auto scroll-smooth space-x-6 p-4 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {programData.map((prog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.3, delay: isLoaded ? Math.min(0.1 * index, 0.3) : 0 }}
                className="flex-shrink-0 w-80 sm:w-96 h-[600px] relative rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                style={{ scrollSnapAlign: "center" }}
                onClick={() => navigate(`${prog.path}#details`)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center duration-500 hover:scale-110"
                  style={{ backgroundImage: `url(${prog.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
                </div>

                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-4">
                    {prog.title}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {prog.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-300 group"
                      >
                        <span className="text-emerald-400 mr-2 group-hover:scale-125 transition-transform">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-emerald-400 to-green-500 text-black py-4 px-6 
                             rounded-full font-semibold flex items-center justify-center gap-2 group
                             shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {canScrollRight && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-emerald-500 p-3 rounded-full shadow-lg hover:bg-emerald-600 z-20 hidden sm:block backdrop-blur-sm"
                onClick={scrollRight}
              >
                <ChevronRight size={24} className="text-black" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 text-center text-gray-400 text-sm sm:hidden">
          Swipe left to see more programs
        </div>
      </div>
    </div>
  );
};

export default Programs;