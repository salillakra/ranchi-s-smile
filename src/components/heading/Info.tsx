import Image from "next/image";
import React from "react";
import doctor_image from "@/public/hero/doctor.svg";
import patient_image from "@/public/hero/patient.svg";
import tech_image from "@/public/hero/tech-electronics.svg";

const InfoCard = (props: { image: any; title: string; text: string }) => {
  return (
    <div className="flex w-52 flex-col items-center justify-center space-y-2">
      <div className="grid place-items-center">
        <Image
          src={props.image}
          height={70}
          width={70}
          className="rounded-full transition-all hover:border hover:border-quaternary"
          alt="doctor logo"
        />
        <p className="text-lg font-thin text-secondary underline">
          {props.title}
        </p>
      </div>
      <p className="text-center text-sm text-quaternary">{props.text}</p>
    </div>
  );
};

const Info = () => {
  const infoCards = [
    {
      id: 1,
      image: doctor_image,
      title: "Qualified Doctors",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima olabore eaque.",
    },
    {
      id: 2,
      image: patient_image,
      title: "1K+ Happy Patients",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima olabore eaque.",
    },
    {
      id: 3,
      image: tech_image,
      title: "Advanced Tech",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima olabore eaque.",
    },
  ];
  return (
    <div className="absolute grid h-60 place-items-center bg-primary md:w-1/2">
      <div className="grid grid-cols-3 gap-4 p-4">
        {infoCards.map((card) => (
          <InfoCard
            key={card.id}
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
