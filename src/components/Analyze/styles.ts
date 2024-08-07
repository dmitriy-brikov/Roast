import styled, { keyframes } from 'styled-components';

export const StyledAnalyzeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 59px 12px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledAnalyzeTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  grid-row-gap: 34px;

  p {
    &[aria-label='emoji'] {
      font-size: 64px;
      line-height: 64px;
    }

    &[aria-label='title'] {
      font-size: 36px;
      font-weight: 900;
      text-align: center;
    }
  }
`;

const transitionAnimation = keyframes`
    0% { top: 0 }
    100% { top: 100vh }
`;

export const StyledAnalyzeProgress = styled.div<{ amount: number }>`
  height: 8px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 97px;
  border-bottom: 8px solid #ff6032;
  z-index: 999;
  animation: ${transitionAnimation} 2s ${({ amount }) => amount} linear;
  background: linear-gradient(
    360deg,
    rgba(255, 96, 50, 0.8) 0%,
    rgba(153, 58, 30, 0) 100%
  );
`;
