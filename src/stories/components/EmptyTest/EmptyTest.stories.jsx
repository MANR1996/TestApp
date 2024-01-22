import EmptyTest from "../../../components/EmptyTest";
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../App'
import { MemoryRouter } from "react-router-dom";
import { StyledContanier } from "../../styles/index.styles";

export default {
    title: 'Components/EmptyTest',
    component: EmptyTest,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <MemoryRouter >
                    <StyledContanier>
                        <Story />
                    </StyledContanier>
                </MemoryRouter >
            </ThemeProvider>
        ),
    ],
};

export const Default = {
};