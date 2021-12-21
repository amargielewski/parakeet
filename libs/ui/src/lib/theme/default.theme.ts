import { palette, globalConfig } from './config';

export const defaultTheme = {
  colors: {
    background_primary: palette.white,
    text_primary: palette.gray,
    input_primary: palette.ebony_clay,
    input_secondary: palette.mirage,
    input_font: palette.gray,
    input_tertiary: palette.gunmetal,
    checkbox_border: palette.french_gray,
    checkbox_checked: palette.dodger_blue,
  },
  ...globalConfig,
};
