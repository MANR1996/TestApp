import React from "react";
import { AnswersProvider } from "../../../contexts/AnswerContext";
import OptionItem from '../../../components/OptionsList/OptionItem';
import { StyledContanier } from "../../../styles/index.styles";
import { ThemeMock } from "../../../mocks/mocks";

export default {
    title: 'Components/OptionItem',
    component: OptionItem,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
        <AnswersProvider>
            <ThemeMock>
                <StyledContanier >
                    <Story />
                </StyledContanier>
            </ThemeMock>
        </AnswersProvider>
        )
    ],
};

export const Default = {
    args: {
        id: 1,
        onAnswerQuestion: () => { },
        option: "False",
        rightAnswer: false,
        testResults: {
            answers: [],
            finished: false
        }
    }
};

export const FinishedRight = {
    args: {
        id: 1,
        onAnswerQuestion: () => { },
        option: "True",
        rightAnswer: true,
        testResults: {
            answers: [
                {
                    "questionId": 1,
                    "answer": "True"
                }
            ],
            finished: true
        },
    }
};

export const FinishedFail = {
    args: {
        id: 1,
        onAnswerQuestion: () => { },
        option: "True",
        rightAnswer: false,
        testResults: {
            answers: [
                {
                    "questionId": 1,
                    "answer": "True"
                }
            ],
            finished: true
        },
    }
};