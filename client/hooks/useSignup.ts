import userApi from 'api/userApi';
import { NewUser } from 'const/types';
import { useState } from 'react';

const useSignup = (newUser: NewUser) => {
  const [isUniqueEmail, setIsUniqueEmail] = useState(true);
  const [isUniqueNickname, setIsUniqueNickname] = useState(true);

  const signup = async () => {
    const { data } = await userApi.signup(newUser);
    if (data.key === 'email') {
      setIsUniqueEmail(false);
      return false;
    } else if (data.key === 'nickname') {
      setIsUniqueNickname(false);
      return false;
    } else if (data.success) {
      return true;
    } else return false;
  };
  return { isUniqueEmail, isUniqueNickname, signup };
};

export default useSignup;
