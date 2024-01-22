import QuestionItem from '../../../components/QuestionsList/QuestionItem';
import { AnswersProvider } from "../../../contexts/AnswerContext";
import { DEFAULTMOCKEDSTATE, FINISHEDMOCKEDSTATE } from '../../mocks/constants.js';
import { StoreMock } from '../../mocks/utils.jsx';
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../App'
import { StyledContanier } from "../../styles/index.styles";

export default {
    title: 'Components/QuestionItem',
    component: QuestionItem,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <AnswersProvider >
                <ThemeProvider theme={theme}>
                    <Story />
                </ThemeProvider>
            </AnswersProvider>
        )
    ]
};

export const Default = {
    decorators: [
        (story) =>
            <StoreMock testResultsboxState={DEFAULTMOCKEDSTATE} >
                <StyledContanier >
                    {story()}
                </StyledContanier>
            </StoreMock >
    ],
    args: {
        id: 1,
        options: [
            {
                "option": "Verdadero",
                "rightAnswer": true
            },
            {
                "option": "Falso"
            }
        ],
        question: "Esta es la pregunta",
    }
};

export const FinishedRight = {
    decorators: [
        (Story) =>
            <StoreMock testResultsboxState={FINISHEDMOCKEDSTATE} >
                <StyledContanier>
                    <Story />
                </StyledContanier>
            </StoreMock >
    ],
    args: {
        id: 1,
        onAnswerQuestion: () => { },
        options: [
            {
                "option": "Verdadero",
                "rightAnswer": true
            },
            {
                "option": "Falso"
            }
        ],
        question: "Esta es la pregunta",
    }
};

export const FinishedFail = {
    decorators: [
        (Story) =>
            <StoreMock testResultsboxState={FINISHEDMOCKEDSTATE} >
                <StyledContanier>
                    <Story />
                </StyledContanier>
            </StoreMock >
    ],
    args: {
        id: 1,
        onAnswerQuestion: () => { },
        options: [
            {
                "option": "Verdadero"
            },
            {
                "option": "Falso",
                "rightAnswer": true
            }
        ],
        question: "Esta es la pregunta",
    }
};
