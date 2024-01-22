import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const sharedStyle = props => `
    text-wrap: nowrap;
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 600;
    color: ${props.disabled ? props.theme.light.colorPalette['color-700'] : 'white'};
    background-color: ${props.disabled ? props.theme.light.colorPalette['color-200'] : props.theme.light.colorPalette['color-600']};
    border-radius: 45px;
    box-shadow: ${props.disabled ? 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;' : '0px 8px 15px rgba(85, 83, 83, 1)'};
    transition: all;
    cursor: pointer;
    outline: none;
    text-align: center;
    max-width: 250px;
    box-sizing: border-box;
    text-decoration: none;
    border:unset;

    &:hover {
        background-color:${props.disabled ? props.theme.light.colorPalette['color-200'] : props.theme.light.colorPalette['color-600']};
        color: ${props.disabled ? props.theme.light.colorPalette['color-700'] : '#fff'};
        transform: ${props.disabled ? 'unset' : 'scale(1.05)'};
        cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
        border:unset;
    }

    &:active {
        background-color:${props.disabled ? props.theme.light.colorPalette['color-200'] : props.theme.light.colorPalette['color-700']};
        transform: translateY(-1px);
    }
`;

const StyledLink = styled(Link)`${props => sharedStyle(props)} `;

const StyledButton = styled.button`${props => sharedStyle(props)} `;


export const Button = ({ text = 'Button', disabled, onClick = () => { } }) => {
    return (
        <StyledButton disabled={disabled} onClick={() => onClick()} >
            {text}
        </StyledButton>
    );
}
export const LinkButton = ({ text = 'LinkButton', disabled, link = '/' }) => {
    return (
        <StyledLink to={disabled ? '#' : link} disabled={disabled} >
            {text}
        </StyledLink>
    );
}