import { MouseEventHandler, useState } from 'react';

const useShowPassword = (password: boolean | undefined) => {
  const [isPassword, setIsPassword] = useState(!!password);

  const showPasswordHandler: MouseEventHandler = () => {
    setIsPassword((pre) => !pre);
  };

  return { isPassword, showPasswordHandler };
};

export default useShowPassword;
