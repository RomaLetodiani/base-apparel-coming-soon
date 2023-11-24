import Button from '../button/Button';
import errorIcon from '../../../assets/images/icon-error.svg';
import './input.scss';
type Props = {
  errorMessage: string;
  error: boolean;
  value: string;
  placeholder: string;
  valueChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueBlurHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
  value,
  valueChangeHandler,
  valueBlurHandler,
  errorMessage,
  error,
  placeholder,
}: Props) => {
  return (
    <div className="inputDiv">
      <input
        className={error ? 'error' : ''}
        value={value}
        onChange={valueChangeHandler}
        onBlur={valueBlurHandler}
        placeholder={placeholder}
        type="text"
      />
      <Button />
      {error && <img src={errorIcon} alt="error" />}
      {error && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
