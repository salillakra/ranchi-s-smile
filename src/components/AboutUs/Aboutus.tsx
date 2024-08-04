import React from "react";
import Image from "next/image";
import Card from "./Card";
import Arrow from "@/src/components/Arrow";

const Aboutus = () => {
  return (
    <>
      <Arrow
        id="aboutus"
        className="space-x-2"
        ImageSource="/aboutUs.svg"
        SectionText="About Us"
      />
      {/* aboutus hero section */}

      <div className="flex items-center justify-between px-2 md:-translate-y-8 lg:px-10">
        <section className="mt-10 sm:mt-0 md:p-8">
          <h3 className="text-5xl text-quaternary">
            Welcome To{" "}
            <span className="poppins-regular tracking-tighter text-primary">
              Ranchi&apos;s Smile
            </span>
          </h3>
          <p className="my-8 text-lg text-primary lg:text-2xl">
            Comprehensive Dental Care for the Whole Family
          </p>
          <article className="poppins-thin tracking-thin text-md lg:w-[30rem] lg:text-lg">
            Experience top-notch dental services in a friendly and comfortable
            environment. From routine check-ups to advanced treatments, we’re
            here to keep your smile bright and healthy. Book your appointment
            today and let us take care of your dental needs!
          </article>
        </section>
        <section className="hidden lg:block">
          <Image
            className="w-96"
            src="/female-doctor-hospital-with-stethoscope.png"
            alt="About Us lady doctor"
            width={1920}
            height={1080}
          />
        </section>
      </div>
      <Card />
    </>
  );
};

export default Aboutus;
