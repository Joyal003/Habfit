import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { before: "/before1.jpg", after: "/after1.jpg" },
  { before: "/before2.jpg", after: "/after2.jpg" },
  { before: "/before3.jpg", after: "/after3.jpg" },
  { before: "/before4.jpg", after: "/after4.jpg" },
];

const ReviewCard = ({ before, after }) => (
  <div className="bg-white rounded-[20px] p-3 w-[300px] sm:w-[360px] md:w-[400px] shadow-lg border border-gray-300 flex flex-col">
    {/* Header */}
    <div className="flex items-center justify-between pb-2">
      <span className="text-[10px] sm:text-xs font-semibold text-gray-600">@habfitraining</span>
    </div>

    {/* Before & After Images */}
    <div className="grid grid-cols-2 gap-2">
      <div className="relative">
        <img src={before} alt="Before" className="rounded-xl w-full h-[240px] sm:h-[280px] md:h-[300px] object-cover" />
        <div className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 rounded-lg text-xs sm:text-sm font-bold">Before</div>
      </div>
      <div className="relative">
        <img src={after} alt="After" className="rounded-xl w-full h-[240px] sm:h-[280px] md:h-[300px] object-cover" />
        <div className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 rounded-lg text-xs sm:text-sm font-bold">After</div>
      </div>
    </div>

    {/* Heart Icon */}
    <div className="absolute bottom-2 right-2 text-green-500 text-lg sm:text-xl">💚</div>
  </div>
);

const TransformationSection = () => {
  const scrollRef = useRef(null);

  // Smooth Scroll
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 250 : 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black text-white py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 text-center mb-6 sm:mb-8">
        Reviews
      </h2>

      {/* Scrollable Container with Buttons */}
      <div className="relative w-full max-w-[1200px] flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-0 z-10 bg-gray-900 opacity-60 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-6 px-4 sm:px-10 scroll-smooth snap-x w-full"
        >
          {reviews.map((review, index) => (
            <div key={index} className="snap-center">
              <ReviewCard before={review.before} after={review.after} />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-0 z-10 bg-gray-900 opacity-60 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TransformationSection;
