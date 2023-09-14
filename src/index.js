import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from 'components/Styled/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
