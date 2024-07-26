"use client";

import { blogdata } from "./BlogData";
import { Card } from "./BlogSection";
import { EffectCards, Autoplay, A11y } from "swiper/modules";
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
        modules={[EffectCards, Autoplay, A11y]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
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
