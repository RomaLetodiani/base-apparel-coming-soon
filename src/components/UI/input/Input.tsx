import Button from '../button/Button';
import errorIcon from '../../../assets/images/icon-error.svg';
import './input.scss';
type Props = {
  errorMessage: string;
  error: boolean;
  placeholder: string;
};

const Input = ({ errorMessage, error, placeholder }: Props) => {
  return (
    <div>
      <input placeholder={placeholder} type="text" />
      <Button />
      {error && <img src={errorIcon} alt="error" />}
      {error && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
