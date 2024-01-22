import styled from "styled-components"

export const QuestionCalificationContainer = styled.div`
    display: flex;
    column-gap: 8px;
`;

export const QuestionItemContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'finished' && prop !== 'rightAnswer',
})`
    padding: 0 8px 16px;
    border-bottom: 1px solid ${props => props.rightAnswer ? props.theme.light.colorPalette['color-500'] : props.finished ? props.theme.light.colorPalette['color-insufficient'] : props.theme.light.colorPalette['color-700']};
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`;

export const QuestionList = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
`;

export const Question = styled.h3.withConfig({
    shouldForwardProp: (prop) => prop !== 'finished' && prop !== 'rightAnswer',
})`
    margin: 0;
    color: ${props => !props.rightAnswer && props.finished ? props.theme.light.colorPalette['color-insufficient'] : 'inherit'};
`;