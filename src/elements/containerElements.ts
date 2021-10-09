import styled from 'styled-components';
export const ContainerWrapper = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    display: grid;
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
`;
