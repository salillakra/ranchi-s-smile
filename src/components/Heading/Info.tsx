import Image from "next/image";
import React from "react";
import doctor_image from "@/public/hero/doctor.svg";
import patient_image from "@/public/hero/patient.svg";
import tech_image from "@/public/hero/tech-electronics.svg";

export const InfoCards = [
  {
    id: 1,
    image: doctor_image,
    title: "Qualified Doctors",
    text: "Experienced and certified professionals dedicated to your dental health.",
  },
  {
    id: 2,
    image: patient_image,
    title: "1000+ Happy Patients",
    text: "Join our community of over 1,000 satisfied patients with beautiful smiles.",
  },
  {
    id: 3,
    image: tech_image,
    title: "Advanced Tech",
    text: "State-of-the-art technology for precise and comfortable dental treatments.",
  },
];

const InfoCard = (props: { image: any; title: string; text: string }) => {
  return (
    <div className="flex w-52 flex-col items-center justify-center space-y-2">
      <div className="grid place-items-center">
        <div className="grid h-20 w-20 place-items-center overflow-hidden rounded-full">
          <Image
            src={props.image}
            height={70}
            width={70}
            className="rounded-full transition-all hover:scale-110 hover:border hover:border-quaternary"
            alt="doctor logo"
          />
        </div>

        <p className="poppins-medium text-lg text-black">{props.title}</p>
      </div>
      <p className="poppins-light my-2 text-center text-sm text-gray-600">
        {props.text}
      </p>
    </div>
  );
};

const Info = () => {
  return (
    <div className="grid h-60 place-items-center rounded-xl bg-primary shadow-md shadow-black">
      <div className="grid-col-1 grid gap-4 p-4 lg:grid-cols-3">
        {InfoCards.map((card) => (
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
