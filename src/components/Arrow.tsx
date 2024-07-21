"use client";
interface ArrowProps {
  Image: string;
  SectionText: string;
}

const Arrow = ({ Image, SectionText }: ArrowProps) => {
  return (
    <div className="relative ml-5 inline-block border-b-2 border-quaternary pt-10">
      <div className="flex items-center -space-x-5">
        <img
          src={Image}
          className="h-20 w-20 md:w-24"
          alt="About Us"
          width={80}
          height={80}
        />
        <span className="text-xl text-quaternary md:text-2xl lg:text-3xl">
          {SectionText}
        </span>
      </div>
      {/* arrow */}
      <div className="absolute -bottom-[13px] -right-2">
        <svg
          className="text-quaternary"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        </svg>
      </div>
    </div>
  );
};

export default Arrow;
