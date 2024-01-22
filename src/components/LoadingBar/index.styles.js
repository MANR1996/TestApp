import styled, { keyframes } from "styled-components"

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingBar = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border-width: 4px;
    border-style: solid;
    border-color: ${props => [props.theme.light.colorPalette['color-900'], props.theme.light.colorPalette['color-100'], props.theme.light.colorPalette['color-100']].join(' ')};
    border-image: initial;
    animation: ${spin} 1s linear infinite normal none running;
`;