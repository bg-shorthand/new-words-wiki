import { isSigninState } from '@recoil/isSignin';
import { myInfoState } from '@recoil/myInfo';
import userApi from 'api/userApi';
import setToken from 'modules/setToken';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import useValidString from './useValidString';
import jwt from 'jsonwebtoken';

const useSignin = (email: string, password: string, keepSignin: boolean) => {
  const [err, setErr] = useState('');
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const setIsSignin = useSetRecoilState(isSigninState);
  const setMyInfo = useSetRecoilState(myInfoState);

  const { isCorrect: isCorrectEmail, validString: validEmail } = useValidString('email');
  const { isCorrect: isCorrectPassword, validString: validPassword } = useValidString('password');

  const signin = async () => {
    setWrongEmail(false);
    setWrongPassword(false);
    if (!validEmail(email) || !validPassword(password)) return false;

    const { data } = await userApi.signin(email, password);

    if (!data.success) {
      setErr(data.errMsg);
      if (data.errMsg.indexOf('이메일') !== -1) setWrongEmail(true);
      else if (data.errMsg.indexOf('비밀번호') !== -1) setWrongPassword(true);
      return false;
    } else {
      const { accessToken, refreshToken } = data.data;
      setToken.set(accessToken, refreshToken, keepSignin);

      setIsSignin(true);

      const payload = jwt.decode(accessToken) as jwt.JwtPayload;
      const { email, nickname } = payload;

      setMyInfo({ email, nickname });
      return true;
    }
  };

  return { err, isCorrectEmail, isCorrectPassword, wrongEmail, wrongPassword, signin };
};

export default useSignin;
