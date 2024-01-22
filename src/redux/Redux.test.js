import { testSlice, initialState } from './testSlice';
import { expect } from '@storybook/test';

const payload = [
    {
        "questionId": 1,
        "answer": "Falso"
    },
    {
        "questionId": 2,
        "answer": "Verdadero"
    },
    {
        "questionId": 3,
        "answer": "Falso"
    },
    {
        "questionId": 4,
        "answer": "Falso"
    }
]

test('dispatch updateAnswers', () => {
    const state = testSlice.reducer(initialState, testSlice.actions.updateAnswers(payload));
    expect(state.answers).toEqual(payload);
});

test('dispatch finishTest', () => {
    const state = testSlice.reducer(initialState, testSlice.actions.finishTest(payload));
    expect(state.finished).toEqual(true);
    expect(state.answers).toEqual(payload);
});

test('dispatch restartTest', () => {
    const state = testSlice.reducer({ answers: payload, finished: true }, testSlice.actions.restartTest());
    expect(state.finished).toEqual(false);
    expect(state.answers).toEqual([]);
});