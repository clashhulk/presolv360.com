import "swiper/css";
import "swiper/css/pagination";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide2 from "./../../assets/img/3.webp";
import slide1 from "./../../assets/img/legal-advice-online.webp";
import slide3 from "./../../assets/img/online-apeal.webp";
import styles from "./Carousels.module.css";

// Import Swiper React components
// Import Swiper styles
// import required modules
export default function ImageCarousel() {
  const slides = [slide1, slide2, slide3];
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {slides.map((cost, index) => (
          <SwiperSlide className={styles.swiperSlide} key={index}>
            <img
              className={styles.swiperImage}
              src={cost} // You should provide a source URL here
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
