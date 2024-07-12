import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <>
      <div className="pt-10">
        <div className="flex items-center">
          <Image src="/aboutUs.svg" alt="About Us" width={80} height={80} />
          <span className="text-3xl text-quaternary">About Us</span>
        </div>

        <div className="ml-5 flex items-center">
          <div
            className="arrow-shaft h-[1px] bg-black"
            style={{ width: "200px" }}
          ></div>
          <div className="arrow-head"></div>
        </div>
      </div>
      {/* aboutus hero section */}
      <div className="flex items-center justify-between px-10">
        <section className="p-8">
          <h1 className="text-5xl text-quaternary">
            Welcome To{" "}
            <span className="leading-tight text-primary">Ranchi's Smile</span>
          </h1>
          <p className="my-8 text-2xl text-primary">
            Comprehensive Dental Care for the Whole Family
          </p>
          <article className="w-[30rem] text-lg">
            Experience top-notch dental services in a friendly and comfortable
            environment. From routine check-ups to advanced treatments, we’re
            here to keep your smile bright and healthy. Book your appointment
            today and let us take care of your dental needs!
          </article>
        </section>
        <section>
          <Image
            className="w-96"
            src="/female-doctor-hospital-with-stethoscope.png"
            alt="About Us lady doctor"
            width={1920}
            height={1080}
          />
        </section>
      </div>
    </>
  );
};

export default Aboutus;
