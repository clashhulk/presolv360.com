import "./style.css";
import "swiper/css";
import "swiper/css/pagination";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "./../../assets/img/brands/cherie.webp";
import slide3 from "./../../assets/img/brands/cyril.svg";
import slide4 from "./../../assets/img/brands/iimb.webp";
import slide2 from "./../../assets/img/brands/SINE.webp";
import styles from "./Carousels.module.css";

// Import Swiper React components
// Import Swiper styles
// import required modules
export default function AlliancesIncuCarousels() {
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide1,
    slide2,
    slide3,
    slide4,
  ];
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={4}
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
