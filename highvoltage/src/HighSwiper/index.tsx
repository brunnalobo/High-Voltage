import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./index.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
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
      <Swiper 
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
       className="mySwiper">
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
