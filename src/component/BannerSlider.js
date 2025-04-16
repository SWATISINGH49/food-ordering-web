"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BannerSlider = () => {
  return (
    <div className="w-full h-[40vh]">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper h-full"
        slidesPerView={1}
        spaceBetween={30}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <SwiperSlide key={i}>
            <div className="h-full w-full bg-indigo-300 flex items-center justify-center rounded-lg shadow-lg text-3xl font-bold">
              Slide {i + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
