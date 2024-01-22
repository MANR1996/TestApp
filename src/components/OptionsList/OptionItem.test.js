import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import OptionItem from './OptionItem.jsx';
import { expect } from '@storybook/test';
import { AnswersProvider } from '../../contexts/AnswerContext.jsx';
import { ThemeMock } from '../../mocks/mocks.jsx';

const BASICPROPS = {
    id: 1,
    option: 'Falso',
    rightAnswer: undefined,
    testResults: {
        "answers": [],
        "finished": false
    }
}

const PROPSFINISHED = {
    id: 1,
    option: 'Falso',
    rightAnswer: true,
    testResults: {
        "answers": [{
            questionId: '1',
            answer: 'Falso',
        }
        ],
        "finished": true
    }
}

const PROPSFINISHEDFAIL = {
    id: 1,
    option: 'Falso',
    rightAnswer: false,
    testResults: {
        "answers": [{
            questionId: '1',
            answer: 'Falso',
        }
        ],
        "finished": true
    }
}

test('render optionItem without props', () => {
    const { getByTestId } = render(<AnswersProvider><ThemeMock> <OptionItem /></ThemeMock></AnswersProvider >);
    expect(getByTestId('option-item-label')).toBeInTheDocument();
    const checkbox = getByTestId('option-item-checkbox')
    expect(checkbox.checked).toBe(false);
});

test('render optionItem with basic props', () => {
    const { getByText, getByTestId } = render(<AnswersProvider><ThemeMock> <OptionItem {...BASICPROPS} /></ThemeMock></AnswersProvider >);
    expect(getByText(BASICPROPS.option)).toBeInTheDocument();
    const checkbox = getByTestId('option-item-checkbox')
    expect(checkbox.checked).toBe(false);
});

test('render optionItem when test is finished and it is the right answer', () => {
    const { getByText, getByTestId } = render(<AnswersProvider><ThemeMock> <OptionItem {...PROPSFINISHED} /></ThemeMock></AnswersProvider >);
    expect(getByText(BASICPROPS.option)).toBeInTheDocument();
    const checkbox = getByTestId('option-item-checkbox')
    expect(checkbox.checked).toBe(true);
    fireEvent.click(checkbox);
});

test('render optionItem when test is finished and it is the fail answer', () => {
    const { getByText, getByTestId } = render(<AnswersProvider><ThemeMock> <OptionItem  {...PROPSFINISHEDFAIL} /></ThemeMock></AnswersProvider >);
    expect(getByText(BASICPROPS.option)).toBeInTheDocument();
    const checkbox = getByTestId('option-item-checkbox')
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
});

test('click in checkbox', () => {
    const { getByTestId } = render(<AnswersProvider><ThemeMock> <OptionItem {...BASICPROPS} /></ThemeMock></AnswersProvider >);
    const checkbox = getByTestId('option-item-checkbox')
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
});

test('click in container', () => {
    const { getByTestId } = render(<AnswersProvider><ThemeMock> <OptionItem {...BASICPROPS} /></ThemeMock></AnswersProvider >);
    const container = getByTestId('option-item-container');
    const checkbox = getByTestId('option-item-checkbox')
    expect(checkbox).not.toBeChecked();
    fireEvent.click(container);
    expect(checkbox).toBeChecked();
});