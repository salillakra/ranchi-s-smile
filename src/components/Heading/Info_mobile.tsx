"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// importing the data
import { InfoCards } from "./Info";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Card = ({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) => {
  return (
    <>
      <div className="my-10 h-48 w-80 cursor-pointer rounded-lg bg-primary p-4 sm:h-48 sm:w-96">
        <div className="grid place-items-center">
          <Image
            src={image}
            height={70}
            width={70}
            className="rounded-full transition-all hover:border hover:border-quaternary"
            alt="doctor logo"
          />
          <p className="poppins-medium text-lg text-black">{title}</p>
        </div>
        <p className="poppins-light my-2 text-center text-sm text-gray-600">
          {text}
        </p>
      </div>
    </>
  );
};

export default function Info_mobile() {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {InfoCards.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center">
              <Card image={item.image} title={item.title} text={item.text} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
