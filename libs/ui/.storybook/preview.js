import { ThemeProvider, themeVariant } from '../src/lib/theme/Theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeVariant.Default}>
      <Story />
    </ThemeProvider>
  ),
];
