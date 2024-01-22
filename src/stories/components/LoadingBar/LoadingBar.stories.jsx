import LoadingBar from '../../../components/LoadingBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../App'

export default {
    title: 'Components/LoadingBar',
    component: LoadingBar,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        )
    ],
};

export const Default = {
    args: {},
};