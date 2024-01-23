import { render } from '@testing-library/react';
import Error from './index.jsx';
import { expect } from '@storybook/test';
import { MemoryRouter } from 'react-router-dom';
import { ThemeMock, StoreMock } from '../../mocks/mocks.jsx';

test('renders Home view before do the test', () => {
    const { getByText } = render(<ThemeMock><StoreMock initialStore><MemoryRouter><Error /></MemoryRouter></StoreMock></ThemeMock>);
    expect(getByText('Test App')).toBeInTheDocument();
    const linkDoTest = getByText('Realizar prueba');
    expect(linkDoTest).toBeInTheDocument();
    expect(linkDoTest.getAttribute('href')).toBe('/test');
    const linkReviewTest = getByText('Resultado test');
    expect(linkReviewTest).toBeInTheDocument();
    expect(linkReviewTest.getAttribute('href')).toBe('/');
    expect(linkReviewTest.getAttribute('disabled')).not.toBeNull();
});

test('renders Home view after do the test', () => {
    const { getByText } = render(<ThemeMock><StoreMock><MemoryRouter><Error /></MemoryRouter></StoreMock></ThemeMock>);
    expect(getByText('Test App')).toBeInTheDocument();
    const linkDoTest = getByText('Realizar prueba');
    expect(linkDoTest).toBeInTheDocument();
    expect(linkDoTest.getAttribute('href')).toBe('/');
    expect(linkDoTest.getAttribute('disabled')).not.toBeNull();
    const linkReviewTest = getByText('Resultado test');
    expect(linkReviewTest).toBeInTheDocument();
    expect(linkReviewTest.getAttribute('href')).toBe('/test');
});