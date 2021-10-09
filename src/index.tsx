import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AppProvider } from './store/store';

const rootElement = document.getElementById('root');
render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>,
  rootElement
);
