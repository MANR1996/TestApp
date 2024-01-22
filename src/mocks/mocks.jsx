import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { theme } from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const FINISHEDSTORE = {
  testResults: {
    answers: [
      {
        "questionId": 1,
        "answer": "Falso"
      },
      {
        "questionId": 2,
        "answer": "Falso"
      },
      {
        "questionId": 3,
        "answer": "Falso"
      },
      {
        "questionId": 4,
        "answer": "Verdadero"
      }
    ],
    finished: true
  },
}

const STARTSTORE = {
  testResults: {
    answers: []
  },
  finished: false
}

export const ThemeMock = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export const MemoryRouterMock = ({ children }) => {
  return <MemoryRouter >
    {children}
  </MemoryRouter>
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