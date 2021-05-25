import React, { useContext, useState } from 'react';
import { USERS } from './users';

const UsersContext = React.createContext();

export function GetUsersContext() {
  return useContext(UsersContext).users; 
}

export function DeleteUser() {
  return useContext(UsersContext).deleteUser;
}

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState(USERS);

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
  }

  return (
    <UsersContext.Provider value={{ users, deleteUser }}>
      { children }
    </UsersContext.Provider>
  );
}