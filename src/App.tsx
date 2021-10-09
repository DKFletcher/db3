import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { store } from './store/store';
import { Home, Product, NavBar, Footer, Container } from './components';

function App() {
  const {
    state: { isDark },
  } = useContext(store);
  const theme = isDark ? lightTheme : darkTheme;
  const dummy = 'dummy';
  return (
    <div id="app">
      <GlobalStyles theme={theme} />
      {/* <Container txtProp={'test'}> */}
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
    </div>
  );
}
export default App;
