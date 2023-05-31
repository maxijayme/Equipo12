import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserContextProvider} from './context/UsersContext';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(

      <Provider store={store}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </Provider>

);
reportWebVitals();
