import userApi from 'api/userApi';
import { NewUser } from 'const/types';
import { MouseEventHandler, useState } from 'react';

const useSignup = (newUser: NewUser) => {
  const [isUniqueEmail, setIsUniqueEmail] = useState(true);
  const [isUniqueNickname, setIsUniqueNickname] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const signupHandler: MouseEventHandler = async (e) => {
    e.preventDefault();
    const { data } = await userApi.post(newUser);
    if (data.key === 'email') {
      setIsUniqueEmail(false);
      setTimeout(() => setIsUniqueEmail(true), 3000);
    } else if (data.key === 'nickname') {
      setIsUniqueNickname(false);
      setTimeout(() => setIsUniqueNickname(true), 3000);
    } else if (data.success) {
      setIsSuccess(true);
    }
  };
  return { isUniqueEmail, isUniqueNickname, isSuccess, signupHandler };
};

export default useSignup;
