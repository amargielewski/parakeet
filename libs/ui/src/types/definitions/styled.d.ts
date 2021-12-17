import {} from 'styled-components';
import { ThemeType } from '../CommonTypes';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
