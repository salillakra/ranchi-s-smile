import React from "react";
import Arrow from "../Arrow";
import Image from "next/image";

const Input = ({
  type,
  label,
  required,
}: {
  type: string;
  label: string;
  required?: boolean;
}) => {
  return (
    <div className="relative w-80">
      <input
        {...(required && { required })}
        type={type}
        id="hs-floating-input-email"
        className="peer block w-full rounded-lg border-gray-200 bg-[#d9d9d9] p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-green-500 focus:pb-2 focus:pt-6 focus:ring-green-500 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
        placeholder={label}
      />
      <label
        htmlFor="hs-floating-input-email"
        className="pointer-events-none absolute start-0 top-0 h-full origin-[0_0] truncate border border-transparent p-4 text-sm transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:translate-x-0.5 peer-focus:scale-90 peer-focus:text-quaternary peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-quaternary"
      >
        {label}
      </label>
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
          <Input required={true} type="text" label="First Name" />
          <Input required={true} type="text" label="Last Name" />
          <Input required={true} type="email" label="Email" />
          <Input required={true} type="tel" label="Phone" />

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
        ImageSource="/GetAnAppointment/clock.svg"
      />
      <div className="flex justify-start lg:mx-20">
        <div className="mt-20 w-full space-y-8 px-2 md:w-[40rem]">
          <p className="text-4xl">Easy and Convenient Scheduling</p>
          <p className="text-lg">
            Fill out our simple form or give us a call to schedule your
            appointment at a time that works best for you. Our friendly staff is
            here to help you every step of the way. Don&apos;t wait—secure your
            spot for a healthier, brighter smile today!
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
