import { isSigninState } from '@recoil/isSignin';
import userApi from 'api/userApi';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const useSignin = (email: string, password: string) => {
  const [err, setErr] = useState('');
  const setIsSignin = useSetRecoilState(isSigninState);

  const signin = async () => {
    const { data } = await userApi.signin(email, password);
    if (data.msg) setErr(data.msg);
    else {
      const { accessToken, refreshToken } = data;
      localStorage.setItem('access', accessToken);
      localStorage.setItem('refresh', refreshToken);
      setIsSignin(true);
    }
  };

  return { err, signin };
};

export default useSignin;
