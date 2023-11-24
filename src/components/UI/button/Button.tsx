import arrow from '../../../assets/images/icon-arrow.svg';
import './button.scss';
const Button = () => {
  return (
    <button className="submitButton">
      <img src={arrow} alt=">" />
    </button>
  );
};

export default Button;
