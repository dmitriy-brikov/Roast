'use client';

import React, { useRef } from 'react';
import { home_img } from '@/assets/images';
import { StyledHomeContainer, StyledTitleWrapper } from './styles';
import Image from 'next/image';
import { StyledSubmitBtn } from '@/app/globalStyles';
import { useMainContext } from '@/context';
import { Logo } from '../Logo';

export const Initial: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { addPic, swiper } = useMainContext();

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      addPic(fileURL);
      swiper?.slideNext();
    }
  };

  return (
    <StyledHomeContainer>
      <Logo logoClr="white" />
      <StyledTitleWrapper>
        <h1>Upload your dating pics</h1>
        <p>To get your profile analysis</p>
      </StyledTitleWrapper>
      <Image src={home_img} alt="home" priority />
      <StyledSubmitBtn mainClr="white" onClick={handleClick}>
        <span>Continue</span>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </StyledSubmitBtn>
    </StyledHomeContainer>
  );
};
