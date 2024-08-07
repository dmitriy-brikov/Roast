import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 51px 35px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row-gap: 44px;
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  grid-row-gap: 12px;

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
  }
`;
