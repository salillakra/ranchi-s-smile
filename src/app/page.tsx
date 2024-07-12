import Appointment from "@/src/components/heading/Appointment";
import Hero from "@/src/components/heading/Hero";
import Info from "@/src/components/heading/Info";
import Menu from "@/src/components/heading/Menu";
import React from "react";
import Info_mobile from "../components/heading/Info_mobile";
import Aboutus from "../components/AboutUs/Aboutus";
import Card from "../components/AboutUs/Card";

const page = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-primary to-secondary">
        <div className="flex justify-between p-3 text-quaternary">
          <Menu />
          <Appointment />
        </div>
        <Hero />
        <div className="hidden place-items-center lg:grid">
          <Info />
        </div>
        <div className="block lg:hidden">
          <Info_mobile />
        </div>
      </section>
      <div className="h-[150vh] bg-gradient-to-b from-secondary to-tertiary">
        <Aboutus />
        <Card />
      </div>
    </>
  );
};

export default page;
