import { ThemeType } from '../../types/CommonTypes';
import { palette, globalConfig } from './config';

export const darkTheme: ThemeType = {
  colors: {
    background_primary: palette.black,
    text_primary: palette.gray,
  },
  ...globalConfig,
};
