import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("under-maintance");
  return <>page</>;
};

export default page;
