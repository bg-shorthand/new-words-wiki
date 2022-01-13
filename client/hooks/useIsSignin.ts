import userApi from 'api/userApi';
import jwt from 'jsonwebtoken';
import { useRecoilState } from 'recoil';
import { isSigninState } from '@recoil/isSignin';
import setToken from 'modules/setToken';

const useIsSignin = () => {
  const [isSignin, setIsSignin] = useRecoilState(isSigninState);

  const setIsSigninAsync = async () => {
    const { access, refresh, keepSignin } = setToken.get();

    if (!access || !refresh) return setIsSignin(false);

    const accessPayload = jwt.decode(access) as jwt.JwtPayload;
    if (accessPayload.exp! * 1000 > new Date().valueOf()) return setIsSignin(true);

    const { data } = await userApi.getMyInfo(access, refresh);

    if (data.newAccess) {
      setToken.set(data.newAccess, refresh, keepSignin);
      setIsSignin(true);
    } else {
      data.email ? setIsSignin(true) : setIsSignin(false);
    }
  };

  return { isSignin, setIsSigninAsync };
};

export default useIsSignin;
