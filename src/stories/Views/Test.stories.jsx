import Test from "../../views/Test";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../App'

export default {
    title: 'Views/Test',
    component: Test,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export const Default = {
};