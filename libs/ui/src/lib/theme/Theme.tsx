import React, { PropsWithChildren } from 'react';
import { defaultTheme } from './default.theme';
import { ThemeType } from '../../types/CommonTypes';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { darkTheme } from './dark.theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

type ThemeProviderProps = PropsWithChildren<{ theme: ThemeType }>;

export const ThemeProvider = ({
  theme = defaultTheme,
  children,
}: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
);

export const themeVariant = {
  Default: defaultTheme,
  Dark: darkTheme,
};
