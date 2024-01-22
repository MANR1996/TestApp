import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { theme } from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

export const ThemeMock = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export const MemoryRouterMock = ({ children }) => {
  return <MemoryRouter >
    {children}
  </MemoryRouter>
}