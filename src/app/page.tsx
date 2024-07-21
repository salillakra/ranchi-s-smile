import Appointment from "@/src/components/Heading/Appointment";
import Hero from "@/src/components/Heading/Hero";
import Info from "@/src/components/Heading/Info";
import Menu from "@/src/components/Heading/Menu";
import React from "react";
import Info_mobile from "../components/Heading/Info_mobile";
import Aboutus from "../components/AboutUs/Aboutus";
import Work from "../components/WorkProcess/Work";

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
      <section className="bg-gradient-to-b from-secondary to-tertiary pb-20 pt-6">
        <Aboutus />
      </section>

      {/* how we work */}

      <section className=" bg-gradient-to-b from-tertiary to-primary">
        <Work />
      </section>
    </>
  );
};

export default page;
