import TestFooter from "../../../components/TestFooter";
import { ANSWEREDMOCKEDSTATE, CONTEXTVALUE, DEFAULTMOCKEDSTATE } from "../../../mocks/constants";
import { AnswersProviderMock } from "../../../mocks/mocks";
import { MemoryRouter } from "react-router-dom";
import styled from "styled-components";
import { StyledDiv } from "../../../styles/index.styles";
import { StoreMock, ThemeMock } from "../../../mocks/mocks";

const StyledContanier = styled.div`
    display: block;
    position: relative;
    width: 400px;
    height: 800px;
    padding: 20px;
`;

export default {
    title: 'Components/TestFooter',
    component: TestFooter,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <ThemeMock>
                    <Story />
                </ThemeMock>
            </MemoryRouter>
        )
    ],
};

export const Default = {
    args: {
        answeredQuestions: [],
        questions: [
            {
                "id": 1,
                "question": "El esfuerzo cortante solo aparece cuando cortamos algo.",
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
                "id": 2,
                "question": "La tracción es un esfuerzo que tiende a estirar un objeto.",
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
                "question": "El esqueleto humano está sometido básicamente al esfuerzo de compresión.",
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
                "question": "Un vaso de plástico no tiene ningún tipo de estructura.",
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
        ],
    },
    decorators: [
        (story) =>
            <AnswersProviderMock>
                <StoreMock customStore={DEFAULTMOCKEDSTATE}>
                    <StyledContanier >
                        <StyledDiv >
                            {story()}
                        </StyledDiv>
                    </StyledContanier>
                </StoreMock>
            </AnswersProviderMock>
    ],
};

export const TestFinished = {
    args: {
        numbQuest: 4
    },
    decorators: [
        (story) =>
            <AnswersProviderMock initialContextValue={CONTEXTVALUE}>
                <StoreMock customStore={ANSWEREDMOCKEDSTATE}>
                    <StyledContanier>
                        <StyledDiv>
                            {story()}
                        </StyledDiv>
                    </StyledContanier>
                </StoreMock>
            </AnswersProviderMock>
    ],
};

export const TestReview = {
    args: {
        numbQuest: 4
    },
    decorators: [
        (story) =>
            <AnswersProviderMock>
                <StoreMock>
                    <StyledContanier>
                        <StyledDiv>
                            {story()}
                        </StyledDiv>
                    </StyledContanier>
                </StoreMock>
            </AnswersProviderMock>
    ],
};