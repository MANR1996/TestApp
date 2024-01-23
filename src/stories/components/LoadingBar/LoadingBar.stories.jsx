import LoadingBar from '../../../components/LoadingBar';
import { ThemeMock } from '../../../mocks/mocks';

export default {
    title: 'Components/LoadingBar',
    component: LoadingBar,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeMock>
                <Story />
            </ThemeMock>
        )
    ],
};

export const Default = {
    args: {},
};