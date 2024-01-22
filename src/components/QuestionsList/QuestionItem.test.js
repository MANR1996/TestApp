import React from 'react';
import { render } from '@testing-library/react';
import QuestionItem from './QuestionItem.jsx';
import { expect } from '@storybook/test';
import { StoreMock, ThemeMock } from "../../mocks/mocks.jsx";
import { AnswersProvider } from '../../contexts/AnswerContext.jsx';

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
    question: 'Test question'
}

const PROPSFINISHED = {
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
    question: 'Test question'
}

const PROPSFINISHEDFAIL = {
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
    question: 'Test question'
}

test('render questionItem without props', () => {
    const { queryByText, queryByTestId } = render(<AnswersProvider><ThemeMock> <StoreMock initialStore ><QuestionItem /></StoreMock></ThemeMock></AnswersProvider >);
    expect(queryByText(BASICPROPS.question)).not.toBeInTheDocument();
    expect(queryByTestId('right-icon')).not.toBeInTheDocument();
});

test('render questionItem with basics props', () => {
    const { getByText } = render(<AnswersProvider><ThemeMock> <StoreMock initialStore><QuestionItem {...BASICPROPS} /></StoreMock></ThemeMock></AnswersProvider >);
    expect(getByText(BASICPROPS.question)).toBeInTheDocument()
});

test('render questionItem when finished test and it is a right answer', () => {
    const { getByText, getByTestId } = render(<AnswersProvider><ThemeMock><StoreMock> <QuestionItem {...PROPSFINISHED} /></StoreMock></ThemeMock></AnswersProvider >);
    expect(getByTestId('right-icon')).toBeInTheDocument();
    expect(getByText(PROPSFINISHED.question)).toBeInTheDocument()
});

test('render questionItem when finished test and it is a fail answer', () => {
    const { getByText, getByTestId } = render(<AnswersProvider><ThemeMock><StoreMock> <QuestionItem {...PROPSFINISHEDFAIL} /></StoreMock></ThemeMock></AnswersProvider >);
    expect(getByTestId('fail-icon')).toBeInTheDocument();
    expect(getByText(PROPSFINISHEDFAIL.question)).toBeInTheDocument()
});