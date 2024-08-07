/* eslint-disable react/jsx-key */
'use client';

import React, { useState } from 'react';
import { Initial, Upload, Analyze, Results } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMainContext } from '@/context';
import { StyledSwiperContainer } from './styles';

import 'swiper/css';

const Home = () => {
  const { setSwiper } = useMainContext();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const slideArray = [<Initial />, <Upload />, <Analyze />, <Results />];
  const renderSlideContent = (index: number) => {
    if (index === activeIndex) {
      return slideArray[index as number];
    } else {
      return null;
    }
  };

  const slides = slideArray.map((_, i) => (
    <SwiperSlide key={i}>{renderSlideContent(i)}</SwiperSlide>
  ));

  return (
    <StyledSwiperContainer>
      <Swiper
        onSwiper={setSwiper}
        allowTouchMove={false}
        onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
    </StyledSwiperContainer>
  );
};

export default Home;
