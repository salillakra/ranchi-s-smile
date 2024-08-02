import Image from "next/image";

interface ArrowProps {
  ImageSource: string;
  SectionText: string;
  className?: string;
  id?: string;
}

const Arrow = ({ ImageSource, SectionText, className, id }: ArrowProps) => {
  return (
    <div
      id={id}
      className="relative mr-5 inline-block border-b-2 border-quaternary pb-2 pr-5 pt-8 sm:ml-5"
    >
      <div className={`flex items-center -space-x-2 ${className}`}>
        <Image
          className="h-10 w-10 sm:h-16 sm:w-16 md:w-20"
          alt={SectionText}
          width={100}
          height={100}
          src={ImageSource}
        />
        <span className="text-base text-quaternary md:text-2xl lg:text-2xl">
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
