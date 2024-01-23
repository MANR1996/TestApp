import { LinkButton } from '../../../components/Button';
import { MemoryRouter } from 'react-router-dom';
import { ThemeMock } from '../../../mocks/mocks';

export default {
  title: 'Components/Button',
  component: LinkButton,
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

export const LinkButtonDefault = {
  args: {
    text: 'LinkButton',
    disabled: false,
  },
};

export const LinkButtonDisabled = {
  args: {
    text: 'LinkButton',
    disabled: true,
  },
};