import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { store } from './store/store';
import { Home, Product, NavBar, Footer, Container } from './components';
import { ThemeProvider } from 'styled-components';

function App() {
  const {
    state: { isDark },
  } = useContext(store);
  const theme = isDark ? lightTheme : darkTheme;
  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <div className={'container'}>
            <div className={'nav'}>
              <NavBar />
            </div>
            <div className={'main'}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ProductTest" exact component={Product} />
              </Switch>
            </div>

            <div className={'footer'}>
              <Footer />
            </div>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default App;
