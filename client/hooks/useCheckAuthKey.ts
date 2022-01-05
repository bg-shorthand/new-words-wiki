import emailAuthApi from 'api/emailAuth';
import { useState } from 'react';

const useCheckAuthKey = () => {
  const [isAuth, setIsAuth] = useState(false);

  const checkAuthKey = async (email: string, authKey: string) => {
    const { data } = await emailAuthApi.get(email, authKey);
    setIsAuth(data.auth);
  };

  return { isAuth, checkAuthKey };
};

export default useCheckAuthKey;
