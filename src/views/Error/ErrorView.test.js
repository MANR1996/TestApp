import { render } from '@testing-library/react';
import Error from './index.jsx';
import { expect } from '@storybook/test';
import { MemoryRouterMock, ThemeMock } from '../../mocks/mocks.jsx';

test('renders Error view', () => {
    const { getByText } = render(<ThemeMock><MemoryRouterMock><Error /></MemoryRouterMock></ThemeMock>);
    const linkElement = getByText('Redireccionar ahora');
    expect(getByText('Wow, de momento no contamos con este sitio')).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
});
