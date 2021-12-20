import { palette, globalConfig } from './config';

export const defaultTheme = {
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
  },
  ...globalConfig,
};
