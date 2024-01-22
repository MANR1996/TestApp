import { render } from '@testing-library/react';
import TestBody from './index.jsx';
import { StoreMock, ThemeMock } from '../../mocks/mocks.jsx';
import { expect } from '@storybook/test';
import { AnswersProvider } from '../../contexts/AnswerContext.jsx';


const BASICPROPS = {
    guide: 'Test Guide',
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
    ]
}

test('renders emptytest without props', () => {
    expect(render(<AnswersProvider><ThemeMock> <StoreMock initialStore ><TestBody /></StoreMock></ThemeMock></AnswersProvider >));
});

test('renders emptytest with expected props', () => {
    const { getByText } = render(<AnswersProvider><ThemeMock> <StoreMock initialStore ><TestBody {...BASICPROPS} /></StoreMock></ThemeMock></AnswersProvider >);
    expect(getByText(BASICPROPS.guide)).toBeInTheDocument()
});