import { DefaultTheme } from 'styled-components';
interface IBreakpoints {
  mobile: string;
  tablet: string;
  tabletLandscape: string;
}
export const lightTheme: DefaultTheme = {
  body: {
    color: '#000000',
    backgroundColor: '#f1f1f1',
  },
  breakpoints: {
    mobile: 'only screen and (max-width: 45rem)',
    tablet: 'only screen and (max-width: 60rem)',
    tabletLandscape: 'only screen and (max-width: 62rem)',
  },
};
