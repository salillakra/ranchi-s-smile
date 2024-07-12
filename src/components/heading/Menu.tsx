import React from "react";

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
  return (
    <div className="w-30 flex cursor-pointer items-center justify-center space-x-2 rounded-md border border-quaternary p-2 sm:bg-secondary">
      <span className="hover-underline-animation hidden text-lg md:inline-block">
        Menu
      </span>
      <Icon />
    </div>
  );
};

export default Menu;
