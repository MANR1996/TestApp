import styled from "styled-components"
import { MEDIAQUERIES } from "./mediaQueries.styles";

export const TestButtons = styled.div`
    column-gap: 16px;
    display: flex;
    margin-top: 36px;

    @media ${MEDIAQUERIES.tablet} {
        flex-direction: column;
        row-gap: 16px;
    }
`;