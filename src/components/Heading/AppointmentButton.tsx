import React from "react";
import Link from "next/link";

const AppointmentButton = () => {
  return (
    <Link
      href={"/appointment"}
      className="before:ease relative grid h-12 w-40 place-items-center overflow-hidden rounded-md bg-primary text-quaternary shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-tertiary before:opacity-10 before:duration-700 hover:border hover:border-quaternary hover:shadow-primary hover:before:-translate-x-40"
    >
      <span className="relative z-[1]">Book Appointment</span>
    </Link>
  );
};

export default AppointmentButton;
