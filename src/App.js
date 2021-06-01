import { useState } from 'react';

import UserList from './components/user-list/userList.component';
import { AddUser } from './context/UsersContext';
import { AddLogin } from './context/LoginContext';

import { TextField, Button } from '@material-ui/core';

import './App.css';

function App() {
  const addUser = AddUser();
  const addLogin = AddLogin();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleName(event) {
    setName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    fetch('https://reqres.in/api/users', { 
      method:'POST',
      body: JSON.stringify({
        name: name,
        job: lastName
      })
    })
    .then(response => {
      if (response.status !== 201) throw new Error('Status Error');
      return response.json();
    })
    .then(json => {
      addLogin(Number(json.id));
      addUser({email: `${name.toLowerCase()}.${lastName.toLowerCase()}@reqres.in`,first_name: name, id:Number(json.id), last_name: lastName});
    })
    .catch(error => console.log(error));
  }

  return (
    <div className='App'>
      <form onSubmit={ handleSubmit }>
        <TextField
          label='Name'
          value={ name }
          onChange={ handleName }
        />
        <TextField 
          label='LastName'
          value={ lastName }
          onChange={ handleLastName } 
        />
        <Button type='submit'>Submit</Button>
      </form>
      <UserList />
    </div>
  );
}

export default App;
