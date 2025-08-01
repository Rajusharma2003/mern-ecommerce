
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const CatSlider = () => {
  return (
    <div className='homeCatSlider pt-4 py-8'>
        <div className='container'>
       
        {/* This is comming form the swiper components */}
        <Swiper
            slidesPerView={6}
            spaceBetween={10}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            navigation={true} 
            modules={[Autoplay, Navigation]}
            className="mySwiper"
      >

      {/* This is the first card of category */}
        <SwiperSlide className='swiperImgCont'>
        <Link to="/">
            <div className='Categoryitem p-3 bg-white rounded-full text-center flex items-center justify-center flex-col gap-2'>
                <img className='w-[50px] cat-img-animate' src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="Category 1" />   
                <h3 className='text-[18px] font-[500] mt-3'>Fashion</h3>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='swiperImgCont'>
        <Link to="/">
            <div className='Categoryitem p-3 bg-white rounded-full text-center flex items-center justify-center flex-col gap-2'>
                <img className='w-[60px] cat-img-animate' src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="Category 1" />   
                <h3 className='text-[18px] font-[500] mt-3'>Fashion</h3>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='swiperImgCont'>
        <Link to="/">
            <div className='Categoryitem p-3 bg-white rounded-full text-center flex items-center justify-center flex-col gap-2'>
                <img className='w-[60px] cat-img-animate' src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="Category 1" />   
                <h3 className='text-[18px] font-[500] mt-3'>Fashion</h3>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='swiperImgCont'>
        <Link to="/">
            <div className='Categoryitem p-3 bg-white rounded-full text-center flex items-center justify-center flex-col gap-2'>
                <img className='w-[60px] cat-img-animate' src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="Category 1" />   
                <h3 className='text-[18px] font-[500] mt-3'>Fashion</h3>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='swiperImgCont'>
        <Link to="/">
            <div className='Categoryitem p-3 bg-white rounded-full text-center flex items-center justify-center flex-col gap-2'>
                <img className='w-[60px] cat-img-animate' src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="Category 1" />   
                <h3 className='text-[18px] font-[500] mt-3'>Fashion</h3>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='swiperImgCont'>
        <Link to="/">
            <div className='Categoryitem p-3 bg-white rounded-full text-center flex items-center justify-center flex-col gap-2'>
                <img className='w-[60px] cat-img-animate' src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="Category 1" />   
                <h3 className='text-[18px] font-[500] mt-3'>Fashion</h3>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='swiperImgCont'>
        <Link to="/">
            <div className='Categoryitem p-3 bg-white rounded-full text-center flex items-center justify-center flex-col gap-2'>
                <img className='w-[60px] cat-img-animate' src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="Category 1" />   
                <h3 className='text-[18px] font-[500] mt-3'>Fashion</h3>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='swiperImgCont'>
        <Link to="/">
            <div className='Categoryitem p-3 bg-white rounded-full text-center flex items-center justify-center flex-col gap-2'>
                <img className='w-[60px] cat-img-animate' src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="Category 1" />   
                <h3 className='text-[18px] font-[500] mt-3'>Fashion</h3>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='swiperImgCont'>
        <Link to="/">
            <div className='Categoryitem p-3 bg-white rounded-full text-center flex items-center justify-center flex-col gap-2'>
                <img className='w-[60px] cat-img-animate' src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="Category 1" />   
                <h3 className='text-[18px] font-[500] mt-3'>Fashion</h3>
            </div>
        </Link>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default CatSlider