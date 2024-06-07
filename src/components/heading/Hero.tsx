import React from "react";
import Image from "next/image";
import AppointmentButton from "./AppointmentButton";

const Text = () => {
  return (
    <div className="space-y-4 md:space-y-8 p-2 py-8 md:pl-10">
      <h1 className="md:text-md text-xs underline sm:text-sm">
        Your Smile, Our Passion
      </h1>
      <p className="w-60 text-lg tracking-tight sm:w-80 md:w-auto md:text-4xl lg:text-6xl">
        Expert dental care for all ages. Book your appointment now for a
        healthy, confident smile!
      </p>
      {/* <AppointmentButton /> */}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex items-center justify-between text-quaternary">
      <Text />
      <Image
        className="w-40 sm:w-72 md:w-96"
        src="/hero-lady-doctor-1.png"
        alt="hero"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Hero;
