import React from "react";

const Star = ({ filled }: { filled: boolean }) => (
  <div
    className={`relative block h-0 w-0 border-b-[14px] border-r-[20px] border-r-transparent ${filled ? "border-green-700" : "border-gray-300"} star rotate-[35deg] transform border-l-[20px] border-l-transparent`}
  >
    <div
      className={`absolute h-0 w-0 border-b-[16px] ${filled ? "border-green-700" : "border-gray-300"} left-[-13px] top-[-9px] rotate-[-35deg] transform border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent content-['']`}
    ></div>
    <div
      className={`absolute h-0 w-0 border-b-[14px] border-r-[20px] border-r-transparent ${filled ? "border-green-700" : "border-gray-300"} left-[-21px] top-[0.75px] rotate-[-70deg] transform border-l-[20px] border-l-transparent content-['']`}
    ></div>
  </div>
);

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={i <= rating} />);
  }

  return <div className="flex space-x-1">{stars}</div>;
};

export default StarRating;
