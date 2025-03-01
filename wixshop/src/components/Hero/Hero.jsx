import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import images from '../../assets/index';
import s from './Hero.module.css';
const Hero = () => {
  return (
    <div className={s.hero}>
      <Swiper
        modules={[Navigation, Autoplay]}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className={s.bg1}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.bg2}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.bg3}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.bg4}></div>
        </SwiperSlide>
      </Swiper>
      <div className={s.heroWrap}>
        <div className={s.borderFull}>
          <h1 className={s.logoText}>
            GOOD <span className={s.span}>to</span> EAT
          </h1>
        </div>
        <div className={s.info}>
          <p className={s.description}>Savouries ans sweets fot the gourmet in all of us</p>
          <img src={images.pig} className={s.pig} />
        </div>
        <div className={s.bTN}>
          <button className={s.button}>
            <p>START SHOPPING &#x2764;</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
