"use client";

import React from "react";
import Lottie from "react-lottie";
import animationData from "@/src/lottie/Loading.json";

const page = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="grid h-screen w-screen place-items-center">
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default page;
