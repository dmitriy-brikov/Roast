import React from 'react';
import {
  StyledResultsContainer,
  StyledResultsProgressbar,
  StyledResultsProgressbarWrapper,
  StyledResultsStatsWrapper,
  StyledResultStatsTopWrapper,
} from './styles';
import { useMainContext } from '@/context';
import { Logo } from '../Logo';
import { StyledSubmitBtn } from '@/app/globalStyles';

export const Results: React.FC = () => {
  const { uploadedPics } = useMainContext();
  return (
    <StyledResultsContainer>
      <h1>Get detailed report</h1>
      <StyledResultsStatsWrapper>
        <StyledResultStatsTopWrapper>
          <img src={uploadedPics[0]} alt="pic" />
          <div>
            <span aria-label="name">Marta</span>
            <span>🕔 27 yo</span>
            <span>💁‍♀️ Woman</span>
            <span>🌶️ Looking for fun </span>
          </div>
        </StyledResultStatsTopWrapper>
        <StyledResultsProgressbarWrapper>
          <div>
            <span>Attractiveness</span>
            <StyledResultsProgressbar progress={78} />
          </div>
          <div>
            <span>Confidence</span>
            <StyledResultsProgressbar progress={78} />
          </div>
          <div>
            <span>Authenticity</span>
            <StyledResultsProgressbar progress={78} />
          </div>
          <div>
            <span>Potential</span>
            <StyledResultsProgressbar progress={78} isHighlighted />
          </div>
        </StyledResultsProgressbarWrapper>
        <Logo style={{ height: '22px' }} logoClr="orange" />
      </StyledResultsStatsWrapper>
      <StyledSubmitBtn mainClr="orange">Continue</StyledSubmitBtn>
    </StyledResultsContainer>
  );
};
