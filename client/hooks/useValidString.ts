import { emailRegex, pwdRegex } from 'const/const';
import { FocusEventHandler, useState } from 'react';

const useValidString = (type: 'email' | 'password') => {
  const [isCorrect, setisCorrect] = useState(true);

  const validStringHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    const regex = type === 'email' ? emailRegex : pwdRegex;

    if (!regex.test(value)) {
      setisCorrect(false);
      e.currentTarget.focus();
    } else setisCorrect(true);
  };

  return { isCorrect, validStringHandler };
};

export default useValidString;
