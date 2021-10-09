import React from 'react';
import styled from 'styled-components';
export const ContainerWrapper = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    display: grid;
    padding: 0;

    grid-template-columns: 10rem auto 10rem;
    grid-template-rows: 9fr 1fr;
  }
  .nav {
    grid-column: 1;
    grid-row: 1;
    background-color: blueviolet;
  }
  .main {
    height: 90%;
    overflow: auto;
    grid-row: 1 / span 2;
    grid-column: 2;
  }
  .footer {
    grid-row: 2;
    grid-column: 1 / span 3;
    background-color: blue;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 3rem auto 3rem;
    }
    .nav {
      grid-row: 1;
      background-color: blueviolet;
    }
    .main {
      height: auto;
      grid-column: 1;
      grid-row: 2;
    }
    .footer {
      grid-row: 3;
      background-color: blue;
    }
  }
  /* } */
`;
