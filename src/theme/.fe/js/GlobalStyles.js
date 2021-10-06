import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    margin: 1px0;
    padding: 10px;
  }
  body, html {
    /* font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.color}; */
  }
`;
