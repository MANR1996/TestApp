import { expect } from '@storybook/test';
import { render } from '@testing-library/react';
import App from './App';

test('render App', () => {
    const { getByText } = render(<App />)
    expect(getByText('Aplicación Test')).toBeInTheDocument()
})