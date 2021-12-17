import { palette, globalConfig } from './config';

export const defaultTheme = {
  colors: {
    background_primary: palette.white,
    text_primary: palette.gray,
  },
  ...globalConfig,
};
