import React, { useEffect } from 'react';
import {
  StyledAnalyzeProgress,
  StyledAnalyzeTitleWrapper,
  StyledAnalyzeWrapper,
} from './styles';
import { Logo } from '../Logo';
import { useMainContext } from '@/context';

export const Analyze: React.FC = () => {
  const { uploadedPics, swiper } = useMainContext();

  useEffect(() => {
    const id = setTimeout(() => {
      swiper?.slideNext();
    }, uploadedPics.length * 2000);

    return () => clearTimeout(id);
  });

  return (
    <StyledAnalyzeWrapper
      style={{ backgroundImage: `url(${uploadedPics[0]})` }}
    >
      <Logo logoClr="orange" />
      <StyledAnalyzeTitleWrapper>
        <p aria-label="emoji">🧨</p>
        <p aria-label="title">Analyzing your profile...</p>
      </StyledAnalyzeTitleWrapper>
      <StyledAnalyzeProgress amount={uploadedPics.length} />
    </StyledAnalyzeWrapper>
  );
};
