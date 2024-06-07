import React from "react";
import Link from "next/link";

const AppointmentButton = () => {
  return (
    <Link
      href="/appointment"
      className="mt-16 w-32 rounded-lg bg-primary p-4 text-quaternary"
    >
      Appointment
    </Link>
  );
};

export default AppointmentButton;
