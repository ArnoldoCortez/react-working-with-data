import { useEffect } from 'react';
import { GetUsersContext, FetchUsers } from '../../context/UsersContext';
import UserCard from '../user-card/userCard.component';

import './userList.styles.css';

const UserList = () => {
  const users = GetUsersContext();
  const fetchUsers = FetchUsers();

  useEffect(()=> {
    fetchUsers();
  },[]);
  
  return (
    <div className='users-container'>
      <h1>List of Users</h1>
       {users.map(user => <UserCard key={ user.id } user={ user } />)}
    </div>
  );
}

export default UserList;