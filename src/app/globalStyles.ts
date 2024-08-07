import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: ${({ theme }) => theme.colors.primaryText};
        font-size: 16px;
        line-height: 121%;
        outline: none;
    }

    html,
    body {
        position: relative;
        max-width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        justify-content: center;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a, span, p {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }
`;

type SubmitBtnProps = {
  mainClr: 'orange' | 'white';
};

export const StyledSubmitBtn = styled.button<SubmitBtnProps>`
  background-color: ${props =>
    props.mainClr === 'orange'
      ? props.theme.colors.orange
      : props.theme.colors.primaryText};
  color: ${props =>
    props.mainClr === 'orange'
      ? props.theme.colors.primaryText
      : props.theme.colors.secondaryText};
  border: none;
  width: 319px;
  border-radius: 100px;
  height: 58px;
  font-size: 20px;
  font-weight: 600;
  margin-top: auto;
`;
