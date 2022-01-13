import { ThemeProvider, themeVariant } from '../src/lib/theme/Theme';
import { BrowserRouter } from 'react-router-dom';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeVariant.Default}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
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
