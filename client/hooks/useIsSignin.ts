import userApi from 'api/userApi';
import { useEffect, useState } from 'react';
import { User } from 'const/types';

const useIsSignin = () => {
  const [isSignin, setIsSignin] = useState(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const isSignin = async () => {
      const token = sessionStorage.getItem('user');
      if (token) {
        const { data } = await userApi.isSignin(token);
        setIsSignin(true);
        setUser(data);
      }
    };
    isSignin();
  }, []);

  return { isSignin, user };
};

export default useIsSignin;
