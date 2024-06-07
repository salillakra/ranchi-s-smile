import React from "react";
import { isMobile } from "react-device-detect";

const Icon = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-[15%] hover:animate-spin">
      <span className="inline-block h-1 w-8 rounded-xl bg-quaternary"></span>
      <span className="inline-block h-1 w-8 rounded-xl bg-quaternary"></span>
      <span className="inline-block h-1 w-8 rounded-xl bg-quaternary"></span>
    </div>
  );
};

const Menu = () => {
  if (isMobile) {
    console.log("this is a mobile phone")
  }
  return (
    <div className="w-30 flex cursor-pointer items-center justify-center space-x-2 rounded-md p-2 sm:bg-secondary">
      {isMobile && (
        <span className="hover-underline-animation hidden text-lg md:inline-block">
          Menu
        </span>
      )}
      <Icon />
    </div>
  );
};

export default Menu;
