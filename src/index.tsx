import { render } from 'react-dom';
import App from './App';
import { AppProvider } from './store/store';

const rootElement = document.getElementById('root');
render(
  <AppProvider>
    <App />
  </AppProvider>,
  rootElement
);
