import styled from "styled-components"

export const HomeTitle = styled.h1`
    text-align: center;
    color: ${props => props.theme.light.colorPalette['color-100']};
`;

export const HomeBtns = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
`;