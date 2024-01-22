import styled from "styled-components"
import { MEDIAQUERIES } from "../../styles/mediaQueries.styles";

export const Options = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'testInProgress',
})`
    display: flex;
    padding: 0 20px;
    column-gap: 45px;
    flex-flow: wrap;
    row-gap: 8px;

    @media ${MEDIAQUERIES.tablet} {
        flex-direction: column;
      }
`;

export const OptionItemContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'testInProgress',
})`
    display: flex;
    column-gap: 8px;
    align-items: center;
    cursor: ${props => props.testInProgress ? 'pointer' : 'default'}
`;

export const OptionLabel = styled.label.withConfig({
    shouldForwardProp: (prop) => prop !== 'testInProgress',
})`
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    cursor: ${props => props.testInProgress ? 'pointer' : 'default'}
`;

export const Checkmark = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'finished' && prop !== 'rightAnswer',
})`
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    border-radius: 5px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.30), 0px 1px 1px rgba(0, 5);
    border: 1px solid #999999;
    background-color:${props => props.finished ? props.rightAnswer ? props.theme.light.colorPalette['color-500'] : props.checked ? props.theme.light.colorPalette['color-insufficient'] : '#606062' : props.checked ? props.theme.light.colorPalette['color-500'] : '#606062'};
    
    &:after {
        content:${props => props.finished && !props.rightAnswer ? "'X'" : "''"};
        font-size: 15px;
        font-weight: 400;
        color: white;
        line-height: 21px;
        position: absolute;
        display: ${props => props.checked || (props.finished && props.rightAnswer) ? 'block' : 'none'};

        left: ${props => (props.finished && props.rightAnswer) || !props.finished ? '0.45em' : '0.35em'};
        top: ${props => props.finished && !props.rightAnswer ? 'unset' : '0.25em'} ;
        width: 0.25em;
        height: 0.5em;
        border: solid white;
        border:${props => props.finished && !props.rightAnswer ? 'unset' : 'solid white'} ;
        border-width:${props => props.finished && !props.rightAnswer ? 'unset' : '0 0.15em 0.15em 0'} ;
        transform: ${props => props.finished && !props.rightAnswer ? 'unset' : 'rotate(45deg)'} ;
    }
`;