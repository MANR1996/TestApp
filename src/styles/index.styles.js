import styled from "styled-components"
import { MEDIAQUERIES } from "./mediaQueries.styles";

export const TestButtons = styled.div`
    column-gap: 16px;
    display: flex;
    margin-top: 32px;

    @media ${MEDIAQUERIES.tablet} {
        flex-direction: column;
        row-gap: 16px;
    }
`;

export const StyledContanier = styled.div`
    min-width: 250px;
    max-width: 550px;
    width: 90vw;
    background: white;
    padding: 20px;
    box-sizing: border-box 
`;

export const StyledDiv = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    place-content: center ;
`;