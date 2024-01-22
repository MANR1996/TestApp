import React, { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { AnswersContext } from '../../contexts/AnswerContext';

export const StoreMock = ({ testResultsboxState, children }) => (
    <Provider
        store={configureStore({
            reducer: {
                testResults: createSlice({
                    name: 'testResults',
                    initialState: testResultsboxState,
                    reducers: {
                        updateAnswers: (state, action) => {
                            state.answers = action.payload
                        },
                        finishTest: (state, action) => {
                            state.answers = action.payload
                            state.finished = true;
                        },
                        restartTest: (state, action) => {
                            state.answers = [];
                            state.finished = false;
                        },
                    },
                }).reducer,
            },
        })}
    >
        {children}
    </Provider>
);

export const AnswersProviderMock = ({ initialContextValue, children }) => {
    const [answeredQuestions, setAnsweredQuestions] = useState(initialContextValue ? initialContextValue : [])
    const onAnswerQuestion = (questionId, answer) => {
        if (answeredQuestions.filter(el => el.questionId == questionId).length == 0) {
            setAnsweredQuestions([...answeredQuestions, { 'questionId': questionId, 'answer': answer }])
        } else {
            setAnsweredQuestions(answeredQuestions.map(el => {
                if (el.questionId == questionId) {
                    return { ...el, answer: answer };
                } else {
                    return el;
                }
            }))
        }
    }

    return (
        <AnswersContext.Provider value={{ answeredQuestions, onAnswerQuestion }}>
            {children}
        </AnswersContext.Provider>
    );
};