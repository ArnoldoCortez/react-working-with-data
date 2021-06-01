import './button.styles.css';

const Button = ({ handleOnClick, className, children }) => {

  return(
    <button className={ `button` } onClick={ handleOnClick } >{ children }</button>
  );
}

export default Button;