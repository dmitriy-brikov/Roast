'use client';

import React, { useRef } from 'react';
import {
  ActionIconBtn,
  StyledUploadBlank,
  StyledUploadContainer,
  StyledUploadedPhotosWrapper,
  StyledUploadTitleWrapper,
} from './styles';
import { Logo } from '@/components/Logo';
import { StyledSubmitBtn } from '@/app/globalStyles';
import { useMainContext } from '@/context';
import { PlusIcon } from '@/assets/images';
import { useTheme } from 'styled-components';

export const Upload: React.FC = () => {
  const theme = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadedPics, swiper, removePic, addPic } = useMainContext();

  const handleClick = () => {
    console.log('click handle click', fileInputRef.current);
    if (fileInputRef.current) {
      console.log('here');
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('click');
    const file = event.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      addPic(fileURL);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const moveToAnalyze = () => swiper?.slideNext();

  return (
    <StyledUploadContainer>
      <Logo logoClr="orange" />
      <StyledUploadTitleWrapper>
        <h1>Upload your dating pics</h1>
        <p>To get your profile analysis</p>
      </StyledUploadTitleWrapper>
      <StyledUploadedPhotosWrapper>
        {[...Array(6)].map((_, idx) => (
          <div key={idx}>
            {uploadedPics[idx as number] !== undefined ? (
              <>
                <img src={uploadedPics[idx as number]} alt="uploaded pic" />
                <ActionIconBtn
                  aria-label="remove"
                  onClick={() => removePic(idx)}
                >
                  <PlusIcon color={theme.colors.secondaryText} />
                </ActionIconBtn>
              </>
            ) : (
              <>
                <StyledUploadBlank />
                <ActionIconBtn aria-label="add" onClick={handleClick}>
                  <PlusIcon />
                </ActionIconBtn>
              </>
            )}
          </div>
        ))}
      </StyledUploadedPhotosWrapper>
      <StyledSubmitBtn mainClr="orange" onClick={moveToAnalyze}>
        Analyze
      </StyledSubmitBtn>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </StyledUploadContainer>
  );
};
