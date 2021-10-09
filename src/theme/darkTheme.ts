import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  body: {
    color: '#f1f1f1',
    backgroundColor: '#000000',
  },
  breakpoints: {
    mobile: 'only screen and (max-width: 45rem)',
    tablet: 'only screen and (max-width: 60rem)',
    tabletLandscape: 'only screen and (max-width: 62rem)',
  },
};
