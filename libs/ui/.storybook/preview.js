import { ThemeProvider, themeVariant } from '../src/lib/theme/Theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeVariant.Default}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'app',
    values: [
      {
        name: 'app',
        value: '#18192F',
      },
    ],
  },
};
