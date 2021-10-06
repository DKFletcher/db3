import { useContext } from 'react';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import CardInput from './components/CardInput';
import CardDetails from './components/CardDetails';
import { store } from './store/store';

function App() {
  const {
    state: { isDark },
  } = useContext(store);
  const theme = isDark ? lightTheme : darkTheme;
  return (
    <>
      <GlobalStyles theme={theme} />
      <CardInput />
      <CardDetails />
    </>
  );
}
export default App;
