import Home from "../../views/Home";
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../App'
import { StoreMock } from "../mocks/utils";
import { DEFAULTMOCKEDSTATE, FINISHEDMOCKEDSTATE, ANSWEREDMOCKEDSTATE } from "../mocks/constants";

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
                    <StoreMock testResultsboxState={DEFAULTMOCKEDSTATE}>
                        <Story />
                    </StoreMock >
                </MemoryRouter >
            </ThemeProvider>
        )
    ],
};

export const Default = {
};