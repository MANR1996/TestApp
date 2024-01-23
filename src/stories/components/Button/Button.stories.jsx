import { Button } from '../../../components/Button';
import { ThemeMock } from '../../../mocks/mocks';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeMock>
        <Story />
      </ThemeMock>
    ),
  ],
};

export const ButtonDefault = {
  args: {
    text: 'Button',
    disabled: false,
  },
};

export const ButtonDisabled = {
  args: {
    text: 'Button',
    disabled: true,
  },
};