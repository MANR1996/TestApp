import React from 'react';
import { render } from '@testing-library/react';
import OptionsList from './index.jsx';
import { expect } from '@storybook/test';
import { AnswersProvider } from '../../contexts/AnswerContext.jsx';
import { ThemeMock } from '../../mocks/mocks.jsx';

const BASICPROPS = {
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
        "answers": [],
        "finished": false
    }
}

const PROPSFINISHED = {
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
        answers: [{
            questionId: '1',
            answer: 'Falso',
        }
        ],
        finished: true
    }
}

test('render optionsList without props', () => {
    const { getByTestId, queryAllByTestId } = render(<AnswersProvider><ThemeMock> <OptionsList /></ThemeMock></AnswersProvider >);
    expect(getByTestId('options-list')).toBeInTheDocument();
    const container = queryAllByTestId('option-item-container')
    expect(container.length).toEqual(0);
});

test('render optionsList with basic props', () => {
    const { getAllByTestId } = render(<AnswersProvider><ThemeMock> <OptionsList {...BASICPROPS} /></ThemeMock></AnswersProvider >);
    const container = getAllByTestId('option-item-container')
    expect(container.length).toEqual(BASICPROPS.options.length);
    const checkbox = getAllByTestId('option-item-checkbox')
    expect(checkbox.filter(el => el.checked).length).toEqual(0);
});

test('render optionsList with actives checkbox', () => {
    const { getAllByTestId } = render(<AnswersProvider><ThemeMock> <OptionsList {...PROPSFINISHED} /></ThemeMock></AnswersProvider >);
    const checkbox = getAllByTestId('option-item-checkbox')
    expect(checkbox.filter(el => el.checked).length).toEqual(PROPSFINISHED.testResults.answers.length);
});