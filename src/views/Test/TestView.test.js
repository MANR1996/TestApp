import { ThemeMock, StoreMock, MemoryRouterMock } from '../../mocks/mocks';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { AnswersProvider } from '../../contexts/AnswerContext';
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
    const { getByText } = render(<AnswersProvider><ThemeMock><StoreMock initialStore ><MemoryRouterMock><Test /></MemoryRouterMock></StoreMock></ThemeMock></AnswersProvider>)
    await waitFor(() => getByText('Atrás'));
    expect(getByText('Atrás')).toBeInTheDocument();
    expect(getByText(TESTDATA.subject)).toBeInTheDocument();
    expect(getByText(TESTDATA.topic)).toBeInTheDocument();
    expect(getByText(TESTDATA.guide)).toBeInTheDocument();
    await waitFor(() => getByText('Finalizar'));
    const button = getByText('Finalizar');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
})

test('render Test view and answer all questions', async () => {
    const { getByText, getAllByTestId } = render(<AnswersProvider><ThemeMock><StoreMock initialStore ><MemoryRouterMock><Test /></MemoryRouterMock></StoreMock></ThemeMock></AnswersProvider>)
    await waitFor(() => getByText('Finalizar'));
    const button = getByText('Finalizar');
    const containers = getAllByTestId('options-list')
    const firstDivs = containers.map(el => el.querySelector('div'));
    firstDivs.forEach(el => {
        fireEvent.click(el);
    });
    expect(button).not.toBeDisabled();
    global.fetch.mockRestore();
})