import Error from "../views/Error";
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../App'

export default {
    title: 'Error',
    component: Error,
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
};