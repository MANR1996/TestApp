import { render } from '@testing-library/react';
import Error from './index.jsx';
import { expect } from '@storybook/test';
import { MemoryRouterMock, ThemeMock, StoreMock } from '../../mocks/mocks.jsx';

test('renders Home view before do the test', () => {
    const { getByText } = render(<ThemeMock><StoreMock initialStore><MemoryRouterMock><Error /></MemoryRouterMock></StoreMock></ThemeMock>);
    expect(getByText('Aplicación Test')).toBeInTheDocument();
    const linkDoTest = getByText('Realizar prueba');
    expect(linkDoTest).toBeInTheDocument();
    expect(linkDoTest.getAttribute('href')).toBe('/test');
    const linkReviewTest = getByText('Resultado test');
    expect(linkReviewTest).toBeInTheDocument();
    expect(linkReviewTest.getAttribute('href')).toBe('/');
    expect(linkReviewTest.getAttribute('disabled')).not.toBeNull();
});

test('renders Home view after do the test', () => {
    const { getByText } = render(<ThemeMock><StoreMock><MemoryRouterMock><Error /></MemoryRouterMock></StoreMock></ThemeMock>);
    expect(getByText('Aplicación Test')).toBeInTheDocument();
    const linkDoTest = getByText('Realizar prueba');
    expect(linkDoTest).toBeInTheDocument();
    expect(linkDoTest.getAttribute('href')).toBe('/');
    expect(linkDoTest.getAttribute('disabled')).not.toBeNull();
    const linkReviewTest = getByText('Resultado test');
    expect(linkReviewTest).toBeInTheDocument();
    expect(linkReviewTest.getAttribute('href')).toBe('/test');
});