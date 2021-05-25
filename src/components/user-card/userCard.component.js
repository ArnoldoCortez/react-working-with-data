import Button from '../button/button.component';
import { DeleteUser } from '../../context/UsersContext';
import { GetThemeContext } from '../../context/ThemeContext';
import { ToggleIsLoggedIn, GetLoginInfo } from '../../context/LoginContext';

import './userCard.styles.css';

const UserCard = ({ user : { id, avatar, name, biography } }) => {

  const deleteUser = DeleteUser();
  const theme = GetThemeContext();
  const toggleIsLoggedIn = ToggleIsLoggedIn();
  const loginInfo = GetLoginInfo();

  const { username, password, isLoggedIn } = loginInfo.find(info => info.id === id);

  function handleOnDelete() {
    deleteUser(id);
  }

  function handleOnLogin() {
    return toggleIsLoggedIn(id);
  }

  return (
    <div className={`user-container ${ theme }`}>
      <img src={ avatar } alt=''></img>
      <div className='user-info'>
        <div className='user-header'>
          <h1>{ name }</h1>
          <Button handleOnClick={ handleOnLogin }>
            {isLoggedIn ? 'Logout' : 'Login'}
          </Button>
        </div>
        <p>{ biography }</p>
        {
          isLoggedIn ? 
          <div className='login-info'>
            <div>
              <span>{ `Username: ${ username }` }</span><br/>
              <span>{ `Password: ${ password }` }</span>
            </div>
            <Button handleOnClick={ handleOnDelete }> Delete </Button>
          </div> : null
        }
      </div>
    </div>
  );
}

export default UserCard;