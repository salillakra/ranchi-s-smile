"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import doctor_image from "@/public/hero/doctor.svg";
import patient_image from "@/public/hero/patient.svg";
import tech_image from "@/public/hero/tech-electronics.svg";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

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
      <div className="w-64 rounded-lg bg-primary p-4">
        <div className="grid place-items-center">
          <Image
            src={image}
            height={70}
            width={70}
            className="rounded-full transition-all hover:border hover:border-quaternary"
            alt="doctor logo"
          />
          <p className="text-lg font-thin text-secondary underline">{title}</p>
        </div>
        <p className="text-center text-sm text-quaternary">{text}</p>
      </div>
    </>
  );
};

export default function Info_mobile() {
  const infoCards = [
    {
      id: 1,
      image: doctor_image,
      title: "Qualified Doctors",
      text: "Experienced and certified professionals dedicated to your dental health.",
    },
    {
      id: 2,
      image: patient_image,
      title: "1K+ Happy Patients",
      text: "Join our community of over 1,000 satisfied patients with beautiful smiles.",
    },
    {
      id: 3,
      image: tech_image,
      title: "Advanced Tech",
      text: "State-of-the-art technology for precise and comfortable dental treatments.",
    },
  ];
  return (
    <>
      <Swiper
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        modules={[Navigation, Autoplay]}
        className="mySwiper my-5"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {infoCards.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="grid w-full place-items-center">
              <Card image={item.image} title={item.title} text={item.text} />
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-next swiper-button-next"></div>
        <div className="custom-prev swiper-button-prev"></div>
      </Swiper>
      <style jsx>{`
        .custom-next {
          color: #141e46;
          font-size: 24px;
        }
        .custom-prev {
          color: #141e46;
          font-size: 24px;
        }
      `}</style>
    </>
  );
}
