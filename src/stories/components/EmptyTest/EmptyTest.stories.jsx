import EmptyTest from "../../../components/EmptyTest";
import { MemoryRouter } from "react-router-dom";
import { StyledContanier } from "../../../styles/index.styles";
import { ThemeMock } from "../../../mocks/mocks";

export default {
    title: 'Components/EmptyTest',
    component: EmptyTest,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeMock>
                <MemoryRouter >
                    <StyledContanier>
                        <Story />
                    </StyledContanier>
                </MemoryRouter >
            </ThemeMock>
        ),
    ],
};

export const Default = {
};