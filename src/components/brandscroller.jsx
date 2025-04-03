// components/brandscroller.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const BrandScroller = ({ brands }) => {
  return (
    <div className='py-8'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView='auto'
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className='brand-swiper'
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
            {brand.logo ? (
              <img
                src={brand.logo}
                alt={brand.name}
                className='h-12 max-w-[180px] object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100'
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
            ) : (
              <div className='text-gray-600 font-medium'>{brand.name}</div>
            )}
            <div
              className='text-gray-600 font-medium'
              style={{ display: 'none' }}
            >
              {brand.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandScroller;
