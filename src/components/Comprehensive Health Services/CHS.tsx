import React from "react";
import Arrow from "../Arrow";
import Image from "next/image";
import AppointmentButton from "../Heading/AppointmentButton";

const Cards = [
  {
    Image: "/Comprehensive Health Services/2147879168.jpg",
    Title: "Preventive Care",
    Text: "Regular check-ups and cleanings to maintain optimal oral health and prevent issues.",
  },
  {
    Image: "/Comprehensive Health Services/2149206257.jpg",
    Title: "Restorative Treatments",
    Text: "Advanced procedures to repair and restore your teeth, ensuring functionality and aesthetics.",
  },
  {
    Image: "/Comprehensive Health Services/9365.jpg",
    Title: "Cosmetic Dentistry",
    Text: "Enhancing your smile with treatments like whitening, veneers, and aligners for a confident appearance.",
  },
];

const Card = ({
  ImageString,
  Title,
  Text,
}: {
  ImageString: string;
  Title: string;
  Text: string;
}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <span className="gradient-text link relative block w-fit text-xl after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 sm:text-2xl">
        {Title}
      </span>
      <div className="link relative h-96 w-72 overflow-hidden rounded-lg">
        <Image
          width={400}
          height={400}
          priority={true}
          className="aspect-[3/5] transform object-cover grayscale transition duration-500 ease-in-out hover:scale-110 hover:grayscale-0"
          src={ImageString}
          alt={`${Title} image`}
        />
        <span className="absolute bottom-0 z-10 w-72 bg-[rgba(0,0,0,0.2)] text-center text-base text-white sm:text-lg">
          {Text}
        </span>
      </div>
    </div>
  );
};

const CHS = () => {
  return (
    <div className="">
      <Arrow
        className="space-x-2"
        ImageSource="/Comprehensive Health Services/stethoscope-svgrepo-com.svg"
        SectionText="Comprehensive Health Services"
      />
      <div className="mt-14 grid grid-cols-1 place-items-center gap-4 space-y-6 px-4 sm:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {Cards.map((card) => (
          <Card
            key={card.Title}
            ImageString={card.Image}
            Title={card.Title}
            Text={card.Text}
          />
        ))}
      </div>
      <div className="grid place-items-center py-16">
        <AppointmentButton />
      </div>
    </div>
  );
};

export default CHS;
