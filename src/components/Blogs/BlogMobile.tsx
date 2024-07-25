"use client";

import { blogdata } from "./BlogData";
import { Card } from "./BlogSection";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const BlogMobile = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-10"
      >
        {blogdata.map((blog, index) => (
          <SwiperSlide className="pl-3">
            <Card
              key={index}
              ImageSrc={blog.image}
              Title={blog.title}
              Description={blog.description}
              HashTags={blog.tags}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogMobile;
