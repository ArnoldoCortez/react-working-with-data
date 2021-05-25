import './App.css';

import UserList from './components/user-list/userList.component';
import Button from './components/button/button.component';
import { GetThemeContext, ToggleTheme } from './context/ThemeContext';

function App() {
  const theme = GetThemeContext();
  const toggleTheme = ToggleTheme();

  return (
    <div className={`App ${ theme }`}>
      <Button handleOnClick={ toggleTheme }>Toggle theme</Button>
      <UserList />
    </div>
  );
}

export default App;
