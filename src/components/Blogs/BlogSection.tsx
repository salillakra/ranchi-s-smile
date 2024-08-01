import React from "react";
import Arrow from "../Arrow";
import Image from "next/image";
import { blogdata } from "./BlogData";
import { Fade } from "react-awesome-reveal";

export const Card = ({
  ImageSrc,
  Title,
  Description,
  HashTags,
}: {
  ImageSrc: string;
  Title: string;
  Description: string;
  HashTags: string[];
}) => {
  return (
    <div className="w-80 max-w-sm overflow-hidden rounded bg-primary shadow-lg sm:w-fit">
      <Image
        className="grayscale"
        height={300}
        width={400}
        alt="Blogs wallpaper"
        src={ImageSrc}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{Title}</div>
        <p className="text-base text-gray-700">{Description}</p>
      </div>
      <a
        href="#"
        className="mx-5 block text-right text-quaternary transition-all hover:text-gray-400"
      >
        Read more...
      </a>
      <div className="px-6 pb-2 pt-4">
        {HashTags.map((tag, index) => (
          <span
            key={index}
            className="poppins-light-italic mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >
            {`#${tag}`}
          </span>
        ))}
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <>
      <Arrow
        className="space-x-2"
        ImageSource="/Blogs/blog-writing-svgrepo-com.svg"
        SectionText="our blogs"
      />

      <div className="mt-5 flex w-full flex-wrap justify-center gap-3 overflow-hidden">
        {blogdata.map((data, index) => (
          <Card
            key={index}
            ImageSrc={data.image}
            Title={data.title}
            Description={data.description}
            HashTags={data.tags}
          />
        ))}
      </div>
    </>
  );
};

export default BlogSection;
