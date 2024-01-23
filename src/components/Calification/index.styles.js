import styled from "styled-components"

// Depending on the note it will be the background color.
export const Calification = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'calification',
})`
    position: absolute;
    top: 10px;
    left: 0;
    border: 1px solid #ccc;
    padding: 4px 8px;
    background-color: ${props => Number(props.calification) < 5 ? props.theme.light.colorPalette['color-insufficient'] : Number(props.calification) < 7 ? '#ffc254' : Number(props.calification) < 9 ? '#4343d7' : '#30a956'};
    border-radius: 6px;
    font-size: 24px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: white;
    font-weight: 600;
    `;