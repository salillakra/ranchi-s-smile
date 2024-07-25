import React from "react";
import Arrow from "../Arrow";
import Image from "next/image";

import { blogdata } from "./BlogData";
import BlogMobile from "./BlogMobile";

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
    <div className=" max-w-sm overflow-hidden rounded bg-primary shadow-lg">
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
            className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
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
        Image="/Blogs/blog-writing-svgrepo-com.svg"
        SectionText="our blogs"
      />

      <div className="mt-5 hidden w-full justify-center gap-3 overflow-x-auto md:flex">
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

      <div className="block md:hidden">
        <BlogMobile />
      </div>
    </>
  );
};

export default BlogSection;
