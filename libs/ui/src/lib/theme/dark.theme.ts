import { ThemeType } from '../../types/CommonTypes';
import { palette, globalConfig } from './config';

export const darkTheme: ThemeType = {
  colors: {
    background_primary: palette.black,
    text_primary: palette.gray,
    input_primary: palette.ebony_clay,
    input_secondary: palette.mirage,
    input_tertiary: palette.gunmetal,
    input_font: palette.gray,
    checkbox_border: palette.french_gray,
    checkbox_checked: palette.dodger_blue,
  },
  ...globalConfig,
};
