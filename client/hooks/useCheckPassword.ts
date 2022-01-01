import { FocusEventHandler, useState } from 'react';

const useCheckPassword = (pwd1: string, pwd2: string) => {
  const [isSame, setIsSame] = useState(true);

  const checkPasswordHandler: FocusEventHandler = () => {
    setIsSame(pwd1 === pwd2);
  };

  return { isSame, checkPasswordHandler };
};

export default useCheckPassword;
