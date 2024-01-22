import React from 'react';
import { render } from '@testing-library/react';
import QuestionsList from './index.jsx';
import { expect } from '@storybook/test';
import { StoreMock, ThemeMock } from "../../mocks/mocks.jsx";
import { AnswersProvider } from '../../contexts/AnswerContext.jsx';

const EMPTYPROPS = {
    questions: []
}

const BASICPROPS = {
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

test('render questionsList without props', () => {
    const { queryByTestId } = render(<AnswersProvider><ThemeMock><StoreMock initialStore ><QuestionsList /></StoreMock></ThemeMock></AnswersProvider >);
    expect(queryByTestId('question-calification-container')).not.toBeInTheDocument();
});

test('render questionsList with basics props', () => {
    const { queryByTestId } = render(<AnswersProvider><ThemeMock><StoreMock initialStore><QuestionsList {...EMPTYPROPS} /></StoreMock></ThemeMock></AnswersProvider >);
    expect(queryByTestId('question-calification-container')).not.toBeInTheDocument();
});

test('render questionsList with basics props', () => {
    const { getAllByTestId } = render(<AnswersProvider><ThemeMock><StoreMock initialStore><QuestionsList {...BASICPROPS} /></StoreMock></ThemeMock></AnswersProvider >);
    expect(getAllByTestId('question-calification-container').length).toEqual(BASICPROPS.questions.length)
});