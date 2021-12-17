import { defaultTheme } from '../lib/theme/default.theme';

export type ThemeType = typeof defaultTheme;
export type ColorType = keyof ThemeType['colors'];
export type FontFamily = keyof ThemeType['fontFamily'];
export type FontWeight = keyof ThemeType['fontWeight'];
export type FontSizes = keyof ThemeType['fontSizes'];
export type BoxShadows = keyof ThemeType['boxShadows'];
