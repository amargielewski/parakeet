import 'styled-components';
import { ThemeType } from './CommonTypes';

declare module 'styled-components' {
  export type DefaultTheme = ThemeType;
}
