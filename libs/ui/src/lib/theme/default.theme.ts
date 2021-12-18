import { palette, globalConfig } from './config';

export const defaultTheme = {
  colors: {
    text_primary: palette.gray,
    background_primary: palette.mirage,
    background_secondary: palette.mirage_light,
    button_primary: palette.cornflower_blue,
    button_secondary: palette.mirage_light,
    button_secondary_border: palette.cornflower_blue_transparent,
  },
  ...globalConfig,
};
