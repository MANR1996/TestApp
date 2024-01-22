import { Button } from '../../../components/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../App'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
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