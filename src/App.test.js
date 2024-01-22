import { expect } from '@storybook/test';
import { render } from '@testing-library/react';
import App from './App';
import { StoreMock } from './mocks/mocks';

test('render App', () => {
    const { getByText } = render(<StoreMock initialStore> <App /></StoreMock>)
    expect(getByText('Aplicación Test')).toBeInTheDocument()
})