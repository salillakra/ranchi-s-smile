"use client";

import Arrow from "../Arrow";
import Image from "next/image";
import StarRating from "./ReviewStars";
import { reviews } from "./Reviews_Data";

import { A11y, Pagination, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ReviewCard = ({
  name,
  review,
  rating,
  image,
}: {
  name: string;
  review: string;
  rating: number;
  image: string;
}) => {
  return (
    <div className="mt-14 flex justify-center pb-10">
      <div className="flex flex-col items-start gap-16 px-5 sm:flex-row sm:px-20">
        <div className="relative">
          <div className="h-80 w-80 overflow-hidden rounded-xl bg-primary">
            <Image
              height={500}
              width={500}
              className="h-full object-cover grayscale duration-100 ease-linear hover:scale-105 hover:grayscale-0"
              alt="Customer Image"
              src={image}
            />
          </div>

          <Image
            className="absolute bottom-0 left-0 rounded-b-lg"
            src="/PatientReviews/wave.svg"
            height={500}
            width={500}
            alt="wave image"
          />
          <div className="absolute -right-8 top-12 hidden h-16 w-16 place-items-center overflow-hidden rounded-full bg-tertiary sm:grid">
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

        <div className="flex flex-col justify-center space-y-8 sm:w-96">
          <StarRating rating={rating} />
          <p className="text-lg text-gray-500">{`"${review}"`}</p>

          <p className="poppins-thin-italic text-right text-sm">{`- ${name}`}</p>
        </div>
      </div>
    </div>
  );
};

const Review = () => {
  return (
    <>
      <Arrow
        className="space-x-1"
        ImageSource="/PatientReviews/review-like-message-svgrepo-com.svg"
        SectionText="Our Patient’s Review"
      />

      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        className="mySwiper"
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          waitForTransition: true,
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              image={review.image}
              name={review.name}
              review={review.review}
              rating={review.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review;
