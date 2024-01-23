import React from "react";
import { StyledButton, StyledLink } from "./index.styles";

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