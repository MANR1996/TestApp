import React, { useState } from 'react';
import { AnswersContext } from '../contexts/AnswerContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { STARTSTORE, FINISHEDSTORE } from './constants';

export const ThemeMock = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export const StoreMock = ({ children, initialStore = false, customStore }) => {
  const mockStore = configureStore();
  const store = mockStore(customStore ? customStore : initialStore ? STARTSTORE : FINISHEDSTORE);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

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