import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UsersContextProvider } from './context/UsersContext';
import { LoginContextProvider } from './context/LoginContext';

ReactDOM.render(
  <React.StrictMode>
    <UsersContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </UsersContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);