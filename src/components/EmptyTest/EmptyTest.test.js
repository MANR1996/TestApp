import { render } from '@testing-library/react';
import EmptyTest from './index.jsx';
import { ThemeMock, MemoryRouterMock } from '../../mocks/mocks.jsx';
import { expect } from '@storybook/test';

test('renders emptytest without props', () => {
    const { getByText } = render(<ThemeMock><MemoryRouterMock><EmptyTest /></MemoryRouterMock></ThemeMock>);
    const linkElement = getByText('Atrás');
    expect(getByText('Lo sentimos, no encontramos ningún test.')).toBeInTheDocument();
    expect(getByText('Reintentar')).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
});

test('renders emptytest with expected props', () => {
    const props = { tryAgain: () => { } }
    const { getByText } = render(<ThemeMock><MemoryRouterMock><EmptyTest {...props} /></MemoryRouterMock></ThemeMock>);
    const linkElement = getByText('Atrás');
    expect(getByText('Lo sentimos, no encontramos ningún test.')).toBeInTheDocument();
    expect(getByText('Reintentar')).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
});