import { isSigninState } from '@recoil/isSignin';
import { myInfoState } from '@recoil/myInfo';
import setToken from 'modules/setToken';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import jwt from 'jsonwebtoken';

const useInitSigninState = () => {
  const setIsSignin = useSetRecoilState(isSigninState);
  const setMyInfo = useSetRecoilState(myInfoState);

  useEffect(() => {
    const { access } = setToken.get();
    if (access) {
      setIsSignin(true);

      const payload = jwt.decode(access) as jwt.JwtPayload;
      const { email, nickname } = payload;

      setMyInfo({ email, nickname });
    }
  }, []);
};

export default useInitSigninState;
