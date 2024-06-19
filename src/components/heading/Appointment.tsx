import Link from "next/link";
import React from "react";

const Appointment = () => {
  return (
    <Link
      href="#"
      className="hidden rounded-md border border-quaternary bg-secondary p-2 text-lg sm:inline-block"
    >
      <span className="hover-underline-animation">Appointment</span>
    </Link>
  );
};

export default Appointment;
