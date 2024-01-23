import Calification from '../../../components/Calification';
import { INSUFFICIENTMOCKEDSTATE, NOTABLEMOCKEDSTATE, OUTSTANDINGMOCKEDSTATE, SUFFICIENTMOCKEDSTATE } from '../../../mocks/constants';
import styled from 'styled-components'
import { ThemeMock } from '../../../mocks/mocks';
import { StyledDiv } from '../../../styles/index.styles';
import { StoreMock } from '../../../mocks/mocks';

const StyledContanier = styled.div`
    display: block;
    position: relative;
    width: 200px;
    height: 400px;
    padding: 20px;
`;

export default {
    title: 'Components/Calification',
    component: Calification,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeMock >
                <StyledContanier>
                    <StyledDiv>
                        TEST
                        <Story />
                    </StyledDiv>
                </StyledContanier >
            </ThemeMock>
        )
    ],
};

export const Insufficient = {
    args: {
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
        (Story) => (
            <StoreMock customStore={INSUFFICIENTMOCKEDSTATE}>
                <Story />
            </StoreMock>
        )
    ],
};

export const Sufficient = {
    args: {
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
        (Story) => (
            <StoreMock customStore={SUFFICIENTMOCKEDSTATE}>
                <Story />
            </StoreMock>
        )
    ],
};

export const Notable = {
    args: {
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
        (Story) => (
            <StoreMock customStore={NOTABLEMOCKEDSTATE}>
                <Story />
            </StoreMock>
        )
    ],
};

export const Outstanding = {
    args: {
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
        (Story) => (
            <StoreMock customStore={OUTSTANDINGMOCKEDSTATE}>
                <Story />
            </StoreMock>
        )
    ],
};