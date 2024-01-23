import Test from "../../views/Test";
import { AnswersProvider } from "../../contexts/AnswerContext";
import { DEFAULTMOCKEDSTATE } from '../../mocks/constants';
import { MemoryRouter } from 'react-router-dom';
import { StoreMock, ThemeMock } from "../../mocks/mocks";

export default {
    title: 'Views/Test',
    component: Test,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeMock>
                <AnswersProvider>
                    <MemoryRouter>
                        <StoreMock customStore={DEFAULTMOCKEDSTATE}>
                            <Story />
                        </StoreMock>
                    </MemoryRouter>
                </AnswersProvider>
            </ThemeMock>
        ),
    ],
};

export const Default = {
};