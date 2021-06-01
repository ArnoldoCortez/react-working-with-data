import React, { useContext, useState } from 'react';

const UsersContext = React.createContext();

export function GetUsersContext() {
  return useContext(UsersContext).users; 
}

export function FetchUsers() {
  return useContext(UsersContext).fetchUsers; 
}

export function DeleteUser() {
  return useContext(UsersContext).deleteUser;
}

export function AddUser() {
  return useContext(UsersContext).addUser;
}

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => setUsers(data.data));
  }

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
  }

  const addUser = (user, cb) => {
    setUsers(prevUsers => [...prevUsers, user]);
  }

  return (
    <UsersContext.Provider value={{ users, deleteUser, fetchUsers, addUser }}>
      { children }
    </UsersContext.Provider>
  );
}