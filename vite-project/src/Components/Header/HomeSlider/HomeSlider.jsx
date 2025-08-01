import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {Autoplay, Navigation } from 'swiper/modules';
// Swiper v9+ React: use modules prop on Swiper component (no need for SwiperCore.use)

const HomeSlider = () => {
  return (
   <div className='homeSlider'>
    <div className='container py-4'>
         <Swiper
          spaceBetween={10}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
          navigation={true} modules={[ Autoplay,Navigation]} 
          className="mySwiperHome"
          >

        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
             <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" alt="Slide 1" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
             <img src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg" alt="Slide 1" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
             <div className='item rounded-[20px] overflow-hidden'>
             <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" alt="Slide 1" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" alt="Slide 1" />
            </div>
        </SwiperSlide>

    </Swiper>
    </div>

   </div>
  )
}

export default HomeSlider