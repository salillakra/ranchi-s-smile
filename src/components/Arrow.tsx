import Image from "next/image";

interface ArrowProps {
  ImageSource: string;
  SectionText: string;
  className?: string;
}

const Arrow = ({ ImageSource, SectionText, className }: ArrowProps) => {
  return (
    <div className="relative mr-5 inline-block border-b-2 border-quaternary pt-10 sm:ml-5">
      <div className={`flex items-center -space-x-2 ${className}`}>
        <Image
          className="h-16 w-16 md:w-24"
          alt={SectionText}
          width={100}
          height={100}
          src={ImageSource}
        />
        <span className="text-xl text-quaternary md:text-2xl lg:text-3xl">
          {SectionText.toUpperCase()}
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
