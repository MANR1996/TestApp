import { ThemeMock, MemoryRouterMock } from '../../mocks/mocks';
import { render, waitFor } from '@testing-library/react';
import { expect } from '@storybook/test';
import Test from './index'

const TESTDATA = {
    "subject": "Tecnología",
    "topic": "Estructuras III",
    "guide": "Señala si son verdaderas o falsas las siguientes frases:",
    "questions": [
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

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(TESTDATA),
    })
);

test('render Test view', async () => {
    const { getByText } = render(<ThemeMock><MemoryRouterMock><Test /></MemoryRouterMock></ThemeMock>)
    await waitFor(() => getByText(TESTDATA.subject));
    expect(getByText(TESTDATA.subject)).toBeInTheDocument();
    expect(getByText(TESTDATA.topic)).toBeInTheDocument();
})