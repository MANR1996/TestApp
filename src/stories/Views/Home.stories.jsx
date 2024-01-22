import Home from "../../views/Home";
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../App'

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
};