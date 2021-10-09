import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: {
      color: string;
      backgroundColor: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      tabletLandscape: string;
    };
  }
}
