import QuestionItem from '../../../components/QuestionsList/QuestionItem';
import { AnswersProvider } from "../../../contexts/AnswerContext";
import { DEFAULTMOCKEDSTATE } from '../../../mocks/constants.js';
import styled from "styled-components";
import { StyledContanier } from "../../../styles/index.styles";
import { StoreMock, ThemeMock } from '../../../mocks/mocks.jsx';

export default {
    title: 'Components/QuestionItem',
    component: QuestionItem,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <AnswersProvider >
                <ThemeMock>
                    <Story />
                </ThemeMock>
            </AnswersProvider>
        )
    ]
};

export const Default = {
    decorators: [
        (story) =>
            <StoreMock customStore={DEFAULTMOCKEDSTATE} >
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
            <StoreMock >
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
            <StoreMock>
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
