import Home from "../../views/Home";
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../App'
import { StoreMock } from "../mocks/utils";
import { DEFAULTMOCKEDSTATE, FINISHEDMOCKEDSTATE } from "../mocks/constants";

export default {
    title: 'Views/Home',
    component: Home,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                < MemoryRouter >
                    <Story />
                </MemoryRouter >
            </ThemeProvider>
        )
    ],
};

export const Default = {
    decorators: [
        (Story) => (
            <StoreMock testResultsboxState={DEFAULTMOCKEDSTATE}>
                <Story />
            </StoreMock >
        )
    ],
};
export const TestFinished = {
    decorators: [
        (Story) => (
            <StoreMock testResultsboxState={FINISHEDMOCKEDSTATE}>
                <Story />
            </StoreMock >
        )
    ],
};