import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import viper from '../img/viper.png';
import bandagem from '../img/bandagem.png';
import pele from '../img/pele.png';
import bird from '../img/bird.png';
import materialtattoo from '../img/materialtattoo.png';
import kit from '../img/kit.png'
import pomadinha from '../img/pomadinha.png'
import maquininhakit from '../img/maquininhakit.png'


export default function HighSwiper() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={bandagem} className="App-logo" alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={materialtattoo} className="App-logo" alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={viper} className="App-logo" alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={pele} className="App-logo" alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={pomadinha} className="App-logo" alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={kit} className="App-logo" alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={maquininhakit} className="App-logo" alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={bird} className="App-logo" alt="logo" /></SwiperSlide>
      </Swiper>
    </>
  );
}
