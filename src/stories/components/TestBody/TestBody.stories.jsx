import TestBody from '../../../components/TestBody/index.jsx';
import { DEFAULTMOCKEDSTATE } from '../../../mocks/constants.js';
import { AnswersProvider } from "../../../contexts/AnswerContext";
import styled from "styled-components";
import { StyledContanier } from "../../../styles/index.styles";
import { StoreMock, ThemeMock } from '../../../mocks/mocks.jsx';

export default {
    title: 'Components/TestBody',
    component: TestBody,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeMock>
                <AnswersProvider>
                    <Story />
                </AnswersProvider>
            </ThemeMock>
        )
    ],
};

export const Default = {
    decorators: [
        (story) =>
            <StoreMock customStore={DEFAULTMOCKEDSTATE}>
                <StyledContanier>
                    {story()}
                </StyledContanier>
            </StoreMock >
    ],
    args: {
        guide: 'Esta es la guía para contestar las preguntas',
        questions: [
            {
                "id": 1,
                "question": "Esta es la pregunta #1",
                "options": [
                    {
                        "option": "Verdadero",
                        "rightAnswer": true
                    },
                    {
                        "option": "Falso"
                    },
                    {
                        "option": "No sé"
                    }
                ]
            },
            {
                "id": 2,
                "question": "Esta es la pregunta #2",
                "options": [
                    {
                        "option": "Verdadero",
                        "rightAnswer": true
                    },
                    {
                        "option": "Falso"
                    }
                ]
            },
            {
                "id": 3,
                "question": "Esta es la pregunta #3",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 4,
                "question": "Esta es la pregunta #4",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            }
        ]
    }
};

export const TestFinished = {
    decorators: [
        (story) =>
            <StoreMock>
                <StyledContanier>
                    {story()}
                </StyledContanier>
            </StoreMock >
    ],
    args: {
        guide: 'Esta es la guía para contestar las preguntas',
        questions: [
            {
                "id": 1,
                "question": "Esta es la pregunta #1",
                "options": [
                    {
                        "option": "Verdadero",
                        "rightAnswer": true
                    },
                    {
                        "option": "Falso"
                    },
                    {
                        "option": "No sé"
                    }
                ]
            },
            {
                "id": 2,
                "question": "Esta es la pregunta #2",
                "options": [
                    {
                        "option": "Verdadero",
                        "rightAnswer": true
                    },
                    {
                        "option": "Falso"
                    }
                ]
            },
            {
                "id": 3,
                "question": "Esta es la pregunta #3",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 4,
                "question": "Esta es la pregunta #4",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            }
        ]
    }
};