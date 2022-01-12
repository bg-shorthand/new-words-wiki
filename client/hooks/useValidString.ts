import { emailRegex, pwdRegex } from 'const/const';
import { useState } from 'react';

const useValidString = (type: 'email' | 'password') => {
  const [isCorrect, setisCorrect] = useState(true);

  const validString = (value: string) => {
    const regex = type === 'email' ? emailRegex : pwdRegex;

    if (!regex.test(value)) {
      setisCorrect(false);
    } else setisCorrect(true);
  };

  return { isCorrect, validString };
};

export default useValidString;
