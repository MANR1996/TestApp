import Test from "../../views/Test";
import { ThemeProvider } from 'styled-components';
import { AnswersProvider } from "../../contexts/AnswerContext";
import { theme } from '../../App'
import { DEFAULTMOCKEDSTATE, FINISHEDMOCKEDSTATE } from '../mocks/constants';
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
                    <StoreMock testResultsboxState={DEFAULTMOCKEDSTATE}>
                        <Story />
                    </StoreMock>
                </AnswersProvider>
            </ThemeProvider>
        ),
    ],
};

export const Default = {
};