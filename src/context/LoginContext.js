import React, { useState, useContext } from 'react';
import { LOGIN_INFO } from './login';

const LoginContext = React.createContext();

export const GetLoginInfo = () => {
  return useContext(LoginContext).loginInfo;
}

export const ToggleIsLoggedIn = () => {
  return useContext(LoginContext).loginLogout;
}

export const AddLogin = () => {
  return useContext(LoginContext).addLogin;
}

export const LoginContextProvider = ({ children }) => {
  const [loginInfo, setLoginInfo ] = useState(LOGIN_INFO);

  const loginLogout = (userId) => {
    setLoginInfo(prevLoginInfo => {
      const info = prevLoginInfo.find(info => info.id === userId);
      const index = prevLoginInfo.indexOf(info);

      return [...prevLoginInfo.slice(0, index), {...info, isLoggedIn: !info.isLoggedIn}, ...prevLoginInfo.slice(index+1, prevLoginInfo.length)]
    });
  }

  const addLogin = (id) => {
    setLoginInfo((prevLoginInfo) => [ ...prevLoginInfo ,{ id:id, isLoggedIn: false }]);
  }

  return (
    <LoginContext.Provider value={{ loginInfo, loginLogout, addLogin }}>
      { children }
    </LoginContext.Provider>
  );
}