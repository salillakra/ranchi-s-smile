import React from "react";
import Arrow from "../Arrow";

const Cards = [
  {
    Image: "/WorkProcess/doctor-patient-svgrepo-com.svg",
    Title: "Seeing Patients",
    Description:
      "We warmly welcome every patient, ensuring personalized attention and care.",
  },
  {
    Image: "/WorkProcess/search-5-svgrepo-com.svg",
    Title: "Making a Diagnosis",
    Description:
      "Thorough examinations allow us to accurately diagnose your dental issues.",
  },
  {
    Image: "/WorkProcess/medicine-bottle-drug-svgrepo-com.svg",
    Title: "Developing a Treatment",
    Description:
      "We create customized treatment plans tailored to your unique dental needs.",
  },
];

const WorkCard = ({
  Image,
  Title,
  Description,
  className,
}: {
  Image: string;
  Title: string;
  Description: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <div className="overflow-hidden rounded-full bg-primary p-2">
        <img
          src={Image}
          alt="Work Process"
          className="h-14 w-14 transition-all hover:scale-125"
        />
      </div>
      <h3 className="text-xl font-thin">{Title}</h3>
      <p className="text-md w-[20rem] text-center">{Description}</p>
    </div>
  );
};

const Work = () => {
  return (
    <>
      <Arrow
        Image="/WorkProcess/injection-vaccine-medical-health-doctor-medicine-svgrepo-com.svg"
        SectionText="OUR WORK PROCESS"
      />

      <div className="mt-24 text-quaternary flex flex-col items-center justify-center gap-5">
        <h2 className=" text-3xl lg:text-5xl">
          Let's See How we Work
        </h2>
        <p className="text-md px-8 text-center lg:w-[38rem]">
          Advanced technology and meticulous techniques ensure precision and
          accuracy in every dental procedure.
        </p>
      </div>
      {/* Work Process Cards */}
      <div className=" mt-10 overflow-auto  flex flex-col sm:flex-row items-center justify-between gap-10  px-20">
        {Cards.map((card, index) => (
          <WorkCard
            key={index}
            Image={card.Image}
            Title={card.Title}
            Description={card.Description}
          />
        ))}
      </div>
    </>
  );
};

export default Work;
