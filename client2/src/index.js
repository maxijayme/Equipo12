import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserContextProvider} from './context/UsersContext';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  // </React.StrictMode>
);
reportWebVitals();
