import React from 'react';
import styled from 'styled-components';
export const ContainerWrapper = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 10rem auto 10rem;
    grid-template-rows: auto 3rem;
  }
  .nav {
    grid-column: 1;
    grid-row: 1;
    background-color: blueviolet;
  }
  .main {
    grid-row: 1 / span 2;
    grid-column: 2;
  }
  .footer {
    grid-row: 2;
    grid-column: 1 / span 3;
    background-color: blue;
  }

  @media ${(props) => props.theme.breakpoints} {
    .container {
      grid-template-columns: 1;
      grid-template-rows: 3rem auto 3rem;
    }
    .nav {
      grid-row: 1;
      background-color: blueviolet;
    }
    .main {
      grid-row: 2;
    }
    .footer {
      grid-row: 3;
      background-color: blue;
    }
  }
`;
