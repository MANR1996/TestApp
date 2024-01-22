import TestHeader from "../../../components/TestHeader";
import { StyledContanier } from "../../styles/index.styles";

export default {
    title: 'Components/TestHeader',
    component: TestHeader,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <StyledContanier>
                <Story />
            </StyledContanier>
        ),
    ],
};

export const Default = {
    args: {
        subject: 'Header Subject',
        topic: 'Header Topic',
    }
};