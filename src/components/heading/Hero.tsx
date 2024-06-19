import React from "react";
import Image from "next/image";
import AppointmentButton from "./AppointmentButton";

const Text = () => {
  return (
    <div className="space-y-4 p-2 py-8 md:space-y-8 md:pl-10">
      <h1 className="md:text-md text-xs underline sm:text-sm lg:text-lg">
        Your Smile, Our Passion
      </h1>
      <p className="w-full text-lg tracking-tight sm:w-80 md:w-auto md:text-4xl lg:text-6xl">
        Expert dental care for all ages. Book your appointment now for a
        healthy, confident smile!
      </p>
      <AppointmentButton />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between text-quaternary sm:flex-row">
      <Text />
      <Image
        priority={true}
        className="w-40 overflow-hidden object-cover sm:w-72 md:w-96 lg:w-2/3"
        src="/hero-lady-doctor-1.png"
        alt="hero"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Hero;
