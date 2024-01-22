import { render, fireEvent } from '@testing-library/react';
import { Button } from './index.jsx';
import { ThemeMock } from '../../mocks/mocks.jsx';
import { expect } from '@storybook/test';

test('renders button', () => {
    const { getByText } = render(<ThemeMock><Button /></ThemeMock>);
    expect(getByText('Button')).toBeInTheDocument();
});

test('renders right text', () => {
    const props = { text: 'Texto de prueba' }
    const { getByText } = render(<ThemeMock><Button {...props} /></ThemeMock>);
    expect(getByText(props.text)).toBeInTheDocument();
});

test('renders disabled button', () => {
    const mockHandler = jest.fn();
    const props = {
        onClick: mockHandler,
        disabled: true
    }
    const { getByText } = render(<ThemeMock><Button {...props} /></ThemeMock>);
    const buttonElement = getByText('Button');
    expect(buttonElement).toBeDisabled();
    fireEvent.click(buttonElement);
    expect(mockHandler.mock.calls).toHaveLength(0);
});

test('button onClick event', () => {
    const mockHandler = jest.fn();
    const props = { onClick: mockHandler }
    const { getByText } = render(<ThemeMock><Button {...props} /></ThemeMock>);
    const buttonElement = getByText('Button');
    fireEvent.click(buttonElement);
    expect(mockHandler.mock.calls).toHaveLength(1);
});