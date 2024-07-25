"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Card_Mobile = () => {
  const Card_Data: { id: number; image: string; text: string }[] = [
    {
      id: 1,
      image: "/AboutUs_Cards/trophy.svg",
      text: "With years of expertise, our skilled dentists provide exceptional care, ensuring your dental health and comfort are always prioritized.",
    },
    {
      id: 2,
      image: "/AboutUs_Cards/patient-profile-people-svgrepo-com.svg",
      text: "Over 1,000 happy patients trust our clinic for their dental needs, enjoying healthier, brighter smiles with our compassionate and expert care.",
    },
    {
      id: 3,
      image: "/AboutUs_Cards/doctor.svg",
      text: "Our team of qualified government-certified doctors ensures you receive top-tier dental care with professionalism and expertise.",
    },
    {
      id: 4,
      image: "/AboutUs_Cards/community.svg",
      text: "We take pride in our highly esteemed doctor community, renowned for their dedication, skill, and compassionate care, earning the trust and appreciation of countless patients.",
    },
  ];
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper py-5"
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {Card_Data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="mt-20 flex h-52 w-full justify-center sm:h-60">
              <div className="relative grid h-40 w-80 cursor-pointer place-items-center rounded-lg bg-pentenary p-2 sm:h-48 sm:w-96">
                <p className="sm:text-md text-center text-sm text-quaternary">
                  {item.text}
                </p>
                <div className="absolute -top-7 z-10 rounded-full bg-primary p-2">
                  <Image
                    src={item.image}
                    height={40}
                    width={40}
                    alt="aboutus info icon"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Card_Mobile;
