import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
      box-sizing: border-box;
      margin: 1px0;
      padding: 10px;
    }
    body,
    html {
      background-color: ${(props) => props.theme.body.backgroundColor};
      color: ${(props) => props.theme.body.color};
    }
  `;
