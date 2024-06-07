import Appointment from "@/components/heading/Appointment";
import Hero from "@/components/heading/Hero";
import Info from "@/components/heading/Info";
import Menu from "@/components/heading/Menu";
import React from "react";

const page = () => {
  return (
    <>
      <section className="h-screen bg-gradient-to-b from-primary to-secondary">
        <div className="flex justify-between p-3 text-quaternary">
          <Menu />
          <Appointment />
        </div>
        <Hero />
        <div className="flex items-center justify-center">
          <Info />
        </div>
      </section>
    </>
  );
};

export default page;
