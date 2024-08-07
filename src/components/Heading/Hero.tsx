import React from "react";
import Image from "next/image";
import AppointmentButton from "./AppointmentButton";

const Text = () => {
  return (
    <div className="space-y-4 p-2 py-8 md:space-y-8 md:pl-10">
      <p className="md:text-md text-sm underline sm:text-sm lg:text-lg">
        Your Smile, Our Passion
      </p>
      <h2 className="w-full text-2xl tracking-tighter sm:text-4xl lg:text-6xl">
        Expert dental care for all ages. Book your appointment now for a
        healthy, confident smile!
      </h2>
      <AppointmentButton />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between text-quaternary md:flex-row">
      <Text />
      <Image
        priority={true}
        className="w-40 overflow-hidden object-cover sm:min-w-80 lg:w-2/3"
        src="/hero-lady-doctor-1.png"
        alt="hero"
        width={400}
        height={600}
      />
      <h1 className="poppins-medium my-3 mt-4 animate-text bg-gradient-to-r from-teal-600 via-purple-600 to-quaternary bg-clip-text px-2 text-center text-2xl text-quaternary text-transparent sm:hidden">
        Discover Your Perfect Smile at Ranchi&rsquo;s Top Dental Clinic
      </h1>
    </div>
  );
};

export default Hero;
