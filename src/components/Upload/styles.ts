import styled from 'styled-components';

export const StyledUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 60px 12px 36px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledUploadTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  grid-row-gap: 12px;
  margin: 65px 0 27px;

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
  }
`;

const innerElemStyles = `
  width: calc(100% - 7px);
  height: calc(100% - 6px);
  margin-right: auto;
  margin-bottom: auto;
  border-radius: 8px;
`;

export const StyledUploadedPhotosWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px 4px;

  & > div {
    position: relative;
    width: 100%;
    height: 164px;

    img {
      ${innerElemStyles}
      object-fit: cover;
    }
  }
`;

export const StyledUploadBlank = styled.div`
  ${innerElemStyles}
  background-color: rgba(143, 143, 143, 0.2);
  border: 2px dashed rgba(143, 143, 143, 1);
`;

export const ActionIconBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &[aria-label='add'] {
    background-color: ${props => props.theme.colors.orange};
  }

  &[aria-label='remove'] {
    background-color: #8f8f8f;

    svg {
      transform: rotate(-45deg);
    }
  }
`;
