import Test from "../../views/Test";
import { ThemeProvider } from 'styled-components';
import { AnswersProvider } from "../../contexts/AnswerContext";
import { theme } from '../../App'
import { DEFAULTMOCKEDSTATE } from '../mocks/constants';
import { MemoryRouter } from 'react-router-dom';
import { StoreMock } from "../mocks/utils";

export default {
    title: 'Views/Test',
    component: Test,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <AnswersProvider>
                    <MemoryRouter>
                        <StoreMock testResultsboxState={DEFAULTMOCKEDSTATE}>
                            <Story />
                        </StoreMock>
                    </MemoryRouter>
                </AnswersProvider>
            </ThemeProvider>
        ),
    ],
};

export const Default = {
};