import React from "react";
import { useSwiper } from "swiper/react";

const NavigationBtn = () => {
  const swiper = useSwiper();

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="mt-4 flex justify-center gap-4 sm:mt-0 sm:justify-start lg:ml-64">
      <button
        id="left-arrow"
        onClick={handlePrevClick}
        className="rounded-full bg-primary p-2"
      >
        {/* SVG for left arrow */}
        <svg
          className="h-12 w-12"
          width="151"
          height="141"
          viewBox="0 0 151 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 70.5H143M8 70.5L64.25 8M8 70.5L64.25 133"
            stroke="black"
            stroke-width="15.5285"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        id="right-arrow"
        onClick={handleNextClick}
        className="rounded-full bg-primary p-2"
      >
        {/* SVG for right arrow */}
        <svg
          className="h-12 w-12"
          width="151"
          height="141"
          viewBox="0 0 151 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 70.5H143M143 70.5L86.75 8M143 70.5L86.75 133"
            stroke="black"
            stroke-width="15.5285"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavigationBtn;
