import { useState } from 'react';

type Props = {
  validate: (value: string) => boolean;
};

export const useInput = ({ validate }: Props) => {
  const [value, setValue] = useState('');
  const [wasTouched, setWasTouched] = useState(false);

  const isValid = validate(value);
  const hasError = !isValid && wasTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setWasTouched(true);
  };

  return {
    value,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
  };
};
