import React, { PropsWithChildren } from 'react';
import { defaultTheme } from './default.theme';
import { ThemeType } from '../../types/CommonTypes';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { darkTheme } from './dark.theme';

type ThemeProviderProps = PropsWithChildren<{ theme: ThemeType }>;

export const ThemeProvider = ({
  theme = defaultTheme,
  children,
}: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export const themeVariant = {
  Default: defaultTheme,
  Dark: darkTheme,
};
