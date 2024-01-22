import { render } from '@testing-library/react';
import Error from './index.jsx';
import { expect } from '@storybook/test';
import { MemoryRouterMock, ThemeMock } from '../../mocks/mocks.jsx';

test('renders Home view before do the test', () => {
    const { getByText } = render(<ThemeMock><MemoryRouterMock><Error /></MemoryRouterMock></ThemeMock>);
    expect(getByText('Aplicación Test')).toBeInTheDocument();
    const linkDoTest = getByText('Realizar prueba');
    expect(linkDoTest).toBeInTheDocument();
    expect(linkDoTest.getAttribute('href')).toBe('/test');
    const linkReviewTest = getByText('Resultado test');
    expect(linkReviewTest).toBeInTheDocument();
    expect(linkReviewTest.getAttribute('href')).toBe('/');
    expect(linkReviewTest.getAttribute('disabled')).not.toBeNull();
});