import React from 'react';
import { render } from '@testing-library/react';
import { expect } from '@storybook/test';
import App from './App';

test('render TestHeader without props', () => {
    const { getByText } = render(<App />);
    expect(getByText('Vite + React')).toBeInTheDocument()
});