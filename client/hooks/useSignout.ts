import { isSigninState } from '@recoil/isSignin';
import setToken from 'modules/setToken';
import { useSetRecoilState } from 'recoil';

const useSignout = () => {
  const setIsSignin = useSetRecoilState(isSigninState);

  const signout = () => {
    setToken.clear();
    setIsSignin(false);
  };

  return { signout };
};

export default useSignout;
