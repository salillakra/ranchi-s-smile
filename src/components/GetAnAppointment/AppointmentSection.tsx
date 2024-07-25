import React from "react";
import Arrow from "../Arrow";
import Image from "next/image";

const Input = ({ type, label }: { type: string; label: string }) => {
  return (
    <div className="w-80">
      <div className="relative h-10 w-full min-w-[200px]">
        <input
          required
          type={type}
          className="text-blue-gray-700 disabled:bg-blue-gray-50 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-blue-gray-200 peer h-full w-full rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0"
        />
        <label className="peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 before:content[' '] after:content[' before:border-blue-gray-200 after:border-blue-gray-200 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-quaternary transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-gray-900 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
          {label}
        </label>
      </div>
    </div>
  );
};

const ApptBtn = () => {
  return (
    <div className="grid place-items-center">
      <div className="flex w-80 flex-col items-center space-y-10 rounded-lg bg-primary py-5 sm:w-96 sm:p-5">
        <div className="flex items-center justify-center gap-2">
          <Image
            className="w-10"
            src="/GetAnAppointment/date.svg"
            alt="date and time icon"
            height={100}
            width={100}
          />
          <p className="text-lg sm:text-2xl">Make An Appointment</p>
        </div>

        <form className="flex flex-col items-center gap-4">
          <Input type="text" label="First Name" />
          <Input type="text" label="Last Name" />
          <Input type="email" label="Email" />
          <Input type="tel" label="Phone" />

          {/* appointment button */}
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

const AppointmentSection = () => {
  return (
    <>
      <Arrow
        className="space-x-2"
        SectionText="Get An Appointment"
        Image="/GetAnAppointment/clock.svg"
      />
      <div className="flex justify-start lg:mx-20">
        <div className="mt-20 w-full space-y-8 px-2 md:w-[40rem]">
          <p className="text-4xl">Easy and Convenient Scheduling</p>
          <p className="text-lg">
            Fill out our simple form or give us a call to schedule your
            appointment at a time that works best for you. Our friendly staff is
            here to help you every step of the way. Don't wait—secure your spot
            for a healthier, brighter smile today!
          </p>
        </div>
      </div>

      <div className="mx-3 my-6 flex items-center justify-center gap-8 rounded-lg bg-primary md:mx-10 md:my-6">
        <div className="md:mt-14">
          <ApptBtn />
        </div>
        {/* image */}
        <div className="hidden md:block">
          <Image
            className="rounded-lg"
            height={500}
            width={500}
            src="/GetAnAppointment/detailed-doctors-nurses.png"
            alt="appointment"
          />
        </div>
      </div>
    </>
  );
};

export default AppointmentSection;
