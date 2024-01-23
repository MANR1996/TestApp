import Error from "../../views/Error";
import { MemoryRouter } from 'react-router-dom';
import { ThemeMock } from "../../mocks/mocks";

export default {
    title: 'Views/Error',
    component: Error,
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
};