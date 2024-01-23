import Home from "../../views/Home";
import { MemoryRouter } from 'react-router-dom';
import { DEFAULTMOCKEDSTATE } from "../../mocks/constants";
import { StoreMock, ThemeMock } from "../../mocks/mocks";

export default {
    title: 'Views/Home',
    component: Home,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeMock>
                < MemoryRouter >
                    <Story />
                </MemoryRouter >
            </ThemeMock>
        )
    ],
};

export const Default = {
    decorators: [
        (Story) => (
            <StoreMock customStore={DEFAULTMOCKEDSTATE}>
                <Story />
            </StoreMock >
        )
    ],
};
export const TestFinished = {
    decorators: [
        (Story) => (
            <StoreMock>
                <Story />
            </StoreMock >
        )
    ],
};