import { render } from '@testing-library/react';
import { LinkButton } from './index.jsx';
import { ThemeMock, MemoryRouterMock } from '../../mocks/mocks.jsx';
import { expect } from '@storybook/test';

test('render link without props', () => {
    const { getByText } = render(<ThemeMock><MemoryRouterMock><LinkButton /></MemoryRouterMock></ThemeMock>);
    const linkElement = getByText('LinkButton');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
});

test('render right text', () => {
    const props = { text: 'Texto de prueba', link: '/test' }
    const { getByText } = render(<ThemeMock><MemoryRouterMock><LinkButton {...props} /></MemoryRouterMock></ThemeMock>);
    const linkElement = getByText(props.text);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe(props.link);
});

test('renders disabled link', () => {
    const props = { link: '/test', disabled: true }
    const { getByText } = render(<ThemeMock><MemoryRouterMock><LinkButton {...props} /></MemoryRouterMock></ThemeMock>);
    const linkElement = getByText('LinkButton');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
    expect(linkElement.getAttribute('disabled')).not.toBeNull();
});