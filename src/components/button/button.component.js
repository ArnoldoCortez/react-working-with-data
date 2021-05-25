import './button.styles.css';
import { GetThemeContext } from '../../context/ThemeContext';

const Button = ({ handleOnClick, className, children }) => {
  const theme = GetThemeContext();

  return(
    <button className={ `button ${ theme }` } onClick={ handleOnClick } >{ children }</button>
  );
}

export default Button;