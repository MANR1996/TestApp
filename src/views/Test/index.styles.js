import styled from "styled-components"

export const Test = styled.div`
    width:500px;
    display: flex;
    flex-direction: column;
    padding: 36px;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(85, 83, 83, 1);
    background: linear-gradient(0deg, ${props => props.theme.light.colorPalette['color-100']}, ${props => props.theme.light.colorPalette['color-200']});
`;