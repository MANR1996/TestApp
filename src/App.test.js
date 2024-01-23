import { expect } from '@storybook/test';
import { render } from '@testing-library/react';
import { StoreMock } from './mocks/mocks';
import App from './App';

test('render App', () => {
    const { getByText } = render(<StoreMock initialStore> <App /></StoreMock>)
    expect(getByText('Test App')).toBeInTheDocument()
})