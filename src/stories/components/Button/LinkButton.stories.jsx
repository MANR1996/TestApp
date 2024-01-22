import { LinkButton } from '../../../components/Button';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../App'

export default {
  title: 'Components/Button',
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        < MemoryRouter >
          <Story />
        </MemoryRouter >
      </ThemeProvider>
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