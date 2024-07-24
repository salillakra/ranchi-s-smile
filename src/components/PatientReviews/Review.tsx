import React from "react";
import Arrow from "../Arrow";
import Image from "next/image";

const Review = () => {
  return (
    <>
      <Arrow
        Image="/PatientReviews/review-like-message-svgrepo-com.svg"
        SectionText="Our Patient’s Review"
      />

      <div className="flex">
        <div className="relative h-80 w-80 bg-primary">
          <Image
            height={500}
            width={500}
            className="h-full object-cover"
            alt="Customer Image"
            src="/PatientReviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.png"
          />
          <Image
            className="absolute bottom-0 left-0"
            src="/PatientReviews/wave.svg"
            height={500}
            width={500}
            alt="wave image"
          />
          <div className="absolute -right-8 top-12 grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-tertiary">
            <svg
              className="h-12 w-12"
              width="144"
              height="129"
              viewBox="0 0 144 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.3974 13.5789V88.2632C63.3875 99.0635 59.8995 109.418 53.6985 117.055C47.4975 124.692 39.09 128.988 30.3205 129C28.8584 129 27.4562 128.285 26.4224 127.011C25.3885 125.738 24.8077 124.011 24.8077 122.211C24.8077 120.41 25.3885 118.683 26.4224 117.41C27.4562 116.136 28.8584 115.421 30.3205 115.421C36.1669 115.413 41.7719 112.549 45.9059 107.458C50.0399 102.366 52.3652 95.4634 52.3718 88.2632V81.4737H11.0256C8.10248 81.4696 5.30001 80.0376 3.23303 77.492C1.16604 74.9463 0.0033431 71.4948 0 67.8947V13.5789C0.0033431 9.97885 1.16604 6.52738 3.23303 3.98173C5.30001 1.43607 8.10248 0.00411729 11.0256 0H52.3718C55.2949 0.00411729 58.0974 1.43607 60.1644 3.98173C62.2314 6.52738 63.3941 9.97885 63.3974 13.5789ZM132.308 0H90.9615C88.0384 0.00411729 85.2359 1.43607 83.1689 3.98173C81.1019 6.52738 79.9392 9.97885 79.9359 13.5789V67.8947C79.9392 71.4948 81.1019 74.9463 83.1689 77.492C85.2359 80.0376 88.0384 81.4696 90.9615 81.4737H132.308V88.2632C132.301 95.4634 129.976 102.366 125.842 107.458C121.708 112.549 116.103 115.413 110.256 115.421C108.794 115.421 107.392 116.136 106.358 117.41C105.324 118.683 104.744 120.41 104.744 122.211C104.744 124.011 105.324 125.738 106.358 127.011C107.392 128.285 108.794 129 110.256 129C119.026 128.988 127.433 124.692 133.634 117.055C139.835 109.418 143.323 99.0635 143.333 88.2632V13.5789C143.33 9.97885 142.167 6.52738 140.1 3.98173C138.033 1.43607 135.231 0.00411729 132.308 0Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        {/* <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-2xl font-bold text-primary">
            “I had a great experience with the doctor.”
          </h3>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            volutpat sed sed etiam. Nunc, etiam sed sit risus. Nunc, etiam sed
            sit risus.
          </p>
</div> */}
      </div>
    </>
  );
};

export default Review;
