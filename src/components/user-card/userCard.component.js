import Button from '../button/button.component';
import { DeleteUser } from '../../context/UsersContext';
import { GetThemeContext } from '../../context/ThemeContext';
import { ToggleIsLoggedIn, GetLoginInfo } from '../../context/LoginContext';

import './userCard.styles.css';

const UserCard = ({ user : { avatar, email, first_name, id, last_name } }) => {

  const deleteUser = DeleteUser();
  const theme = GetThemeContext();
  const toggleIsLoggedIn = ToggleIsLoggedIn();
  const loginInfo = GetLoginInfo();

  const { isLoggedIn } = loginInfo.find(info => info.id === id);

  function handleOnDelete() {
    deleteUser(id);
  }

  function handleOnLogin() {
    return toggleIsLoggedIn(id);
  }

  return (
    <div className={`user-container ${ theme }`}>
      <img src={ avatar } alt=''></img>
      <h1>{ `${first_name} ${last_name}` }</h1>
      {
        isLoggedIn ? <div className='user-info'>
          <span>{ `Username: ${ email }` }</span><br/>
          {isLoggedIn ? <Button handleOnClick={ handleOnDelete }> Delete </Button> : null}
        </div> : null
      }
      <Button handleOnClick={ handleOnLogin }>
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
    </div>
  );
}

export default UserCard;