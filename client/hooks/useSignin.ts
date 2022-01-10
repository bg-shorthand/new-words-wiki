import userApi from 'api/userApi';
import { useState } from 'react';

const useSignin = (email: string, password: string) => {
  const [err, setErr] = useState('');

  const signin = async () => {
    const { data } = await userApi.signin(email, password);
    if (data.msg) setErr(data.msg);
    else {
      const { accessToken, refreshToken } = data;
      localStorage.setItem('access', accessToken);
      localStorage.setItem('refresh', refreshToken);
    }
  };

  return { err, signin };
};

export default useSignin;
