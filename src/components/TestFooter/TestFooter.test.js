import { ThemeMock, MemoryRouterMock, StoreMock } from "../../mocks/mocks.jsx";
import { render } from '@testing-library/react';
import TestFooter from './index.jsx';
import { expect } from '@storybook/test';
import { AnswersProvider } from "../../contexts/AnswerContext.jsx";

const BASICPROPS = {
    numbQuest: 4
}

test('render TestFooter without props', () => {
    const { getByText } = render(<AnswersProvider><ThemeMock><StoreMock initialStore><MemoryRouterMock><TestFooter /></MemoryRouterMock></StoreMock></ThemeMock></AnswersProvider>)
    expect(getByText('Atrás')).toBeInTheDocument
    const button = getByText('Finalizar');
    expect(button).toBeInTheDocument;
    expect(button).toBeDisabled();
})

test('render TestFooter with basic props', () => {
    const { getByText } = render(<AnswersProvider><ThemeMock><StoreMock initialStore><MemoryRouterMock><TestFooter {...BASICPROPS} /></MemoryRouterMock></StoreMock></ThemeMock></AnswersProvider>)
    expect(getByText('Atrás')).toBeInTheDocument
    expect(getByText('Finalizar')).toBeInTheDocument
})

test('render TestFooter with finished test', () => {
    const { getByText } = render(<AnswersProvider><ThemeMock><StoreMock><MemoryRouterMock><TestFooter /></MemoryRouterMock></StoreMock></ThemeMock></AnswersProvider>)
    expect(getByText('Reiniciar')).toBeInTheDocument
})