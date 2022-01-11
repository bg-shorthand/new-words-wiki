import userApi from 'api/userApi';
import { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useRecoilState } from 'recoil';
import { isSigninState } from '@recoil/isSignin';

const useIsSignin = () => {
  const [isSignin, setIsSignin] = useRecoilState(isSigninState);

  useEffect(() => {
    const isSignin = async () => {
      const access = localStorage.getItem('access');
      const refresh = localStorage.getItem('refresh');

      if (!access || !refresh) return setIsSignin(false);

      const accessPayload = jwt.decode(access) as jwt.JwtPayload;
      if (accessPayload.exp! * 1000 > new Date().valueOf()) return setIsSignin(true);

      const { data } = await userApi.getMyInfo(access, refresh);

      if (data.newAccess) {
        localStorage.setItem('access', data.newAccess);
        setIsSignin(true);
      } else {
        data.email ? setIsSignin(true) : setIsSignin(false);
      }
    };
    isSignin();
  }, []);

  return { isSignin };
};

export default useIsSignin;
