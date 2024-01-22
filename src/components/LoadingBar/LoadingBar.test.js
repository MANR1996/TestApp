import React from 'react';
import { render } from '@testing-library/react';
import LoadingBar from './index.jsx';
import { expect } from '@storybook/test';
import { ThemeMock } from '../../mocks/mocks.jsx';

test('render LoadingBar', () => {
    const { getByTestId } = render(<ThemeMock><LoadingBar /></ThemeMock>);
    expect(getByTestId('loading-bar-container')).toBeInTheDocument();
});