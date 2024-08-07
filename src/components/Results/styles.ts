import styled from 'styled-components';

export const StyledResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 85px 24px 35px;

  h1 {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 43px;
  }
`;

export const StyledResultsStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 23px 21px;
  border-radius: 12px;
  border: 2px solid #8f8f8f;
`;

export const StyledResultStatsTopWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 112px 1fr;
  grid-column-gap: 27px;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 158px;
    object-fit: cover;
    border-radius: 8px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto 0;

    span[aria-label='name'] {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 16px;
    }

    span {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const StyledResultsProgressbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 31px;
  grid-row-gap: 16px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-row-gap: 9px;

    span {
      color: rgba(255, 255, 255, 0.8);
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

export const StyledResultsProgressbar = styled.div<{
  isHighlighted?: boolean;
  progress: number;
}>`
  position: relative;
  width: 100%;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 999px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 12px;
    width: ${({ progress }) => `${progress}%`};
    background-color: ${({ theme, isHighlighted }) =>
      isHighlighted ? theme.colors.orange : theme.colors.primaryText};
  }
`;
