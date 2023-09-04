import "./style.css";
import "swiper/css";
import "swiper/css/pagination";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide5 from "./../../assets/img/brands/94-3-radio-one.webp";
import slide1 from "./../../assets/img/brands/business Today.webp";
import slide2 from "./../../assets/img/brands/MSS.webp";
import slide4 from "./../../assets/img/brands/satyamev-jayate.webp";
import slide3 from "./../../assets/img/brands/startup-india.webp";
import styles from "./Carousels.module.css";

// Import Swiper React components
// Import Swiper styles
// import required modules
export default function AwardsRecCarousels() {
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
  ];
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={styles.acSwiperSlide} key={index}>
            <img
              className={styles.acSwiperImage}
              src={slide} // You should provide a source URL here
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
