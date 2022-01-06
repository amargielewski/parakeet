import { ThemeType } from '../../types/CommonTypes';
import { palette, globalConfig } from './config';

export const darkTheme: ThemeType = {
  colors: {
    text_primary: palette.gray,
    background_primary: palette.mirage,
    background_secondary: palette.mirage_light,
    button_primary: palette.cornflower_blue,
    button_primary_hover: palette.magenta_blue,
    button_secondary: palette.mirage_light,
    button_secondary_hover: palette.dark_blue,
    button_secondary_border: palette.cornflower_blue_transparent,
    button_tertiary: palette.mirage,
    button_tertiary_hover: palette.midnight_mirage,
    input_primary: palette.ebony_clay,
    input_secondary: palette.mirage,
    input_tertiary: palette.gunmetal,
    input_font: palette.gray,
    checkbox_border: palette.french_gray,
    checkbox_checked: palette.cornflower_blue,
    sidebar_primary: palette.mirage_light,
    sidebar_upgrade_background: palette.malibu_light,
    auth_sidebar: palette.mirage_light,
    auth_primary: palette.mirage,
    auth_sidebar_break_line: palette.white_transparent,
    recovery_primary: palette.mirage_light,
  },
  ...globalConfig,
};
