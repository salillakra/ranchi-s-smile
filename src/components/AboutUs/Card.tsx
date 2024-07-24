import React from "react";
import Image from "next/image";
import Card_Mobile from "./Card_Mobile";

const Card = () => {
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
      <div className="hidden -translate-y-16 gap-10 lg:mx-28 lg:grid lg:w-1/2 lg:grid-cols-2">
        {/* Cards */}
        {Card_Data.map((card) => {
          return (
            <div
              key={card.id}
              className="relative shadow-md shadow-black grid h-40 w-80 place-items-center rounded-lg bg-pentenary p-2"
            >
              <p className="text-center text-sm text-quaternary">{card.text}</p>
              <div className="absolute -top-7 z-10 rounded-full bg-primary p-2">
                <Image src={card.image} height={40} width={40} alt="image" />
              </div>
            </div>
          );
        })}
      </div>

      {/* for mobile devices */}
      <div className="h-80 w-full lg:hidden">
        <Card_Mobile />
      </div>
    </>
  );
};

export default Card;
