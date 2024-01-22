import { AnswersProvider } from "../../../contexts/AnswerContext";
import OptionsList from "../../../components/OptionsList";
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../App'
import { StyledContanier } from "../../styles/index.styles";

export default {
    title: 'Components/OptionsList',
    component: OptionsList,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (<AnswersProvider >
            <ThemeProvider theme={theme}>
                <StyledContanier >
                    <Story />
                </StyledContanier>
            </ThemeProvider>
        </AnswersProvider>
        )
    ],
};

export const Default = {
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
        testResults: {
            answers: [],
            finished: false
        }
    }
};

export const MoreOptions = {
    args: {
        id: 1,
        options: [
            {
                "option": "Verdadero",
                "rightAnswer": true
            },
            {
                "option": "Falso"
            },
            {
                "option": "No sé"
            },
        ],
        testResults: {
            answers: [],
            finished: false
        }
    }
};

export const FinishedRight = {
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
        testResults: {
            answers: [
                {
                    "questionId": 1,
                    "answer": "Verdadero"
                }
            ],
            finished: true
        }
    }
};

export const FinishedFail = {
    args: {
        id: 1,
        options: [
            {
                "option": "Verdadero"
            },
            {
                "option": "Falso",
                "rightAnswer": true
            }
        ],
        testResults: {
            answers: [
                {
                    "questionId": 1,
                    "answer": "Verdadero"
                }
            ],
            finished: true
        }
    }
};