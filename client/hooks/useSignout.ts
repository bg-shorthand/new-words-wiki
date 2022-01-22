import { isSigninState } from '@recoil/isSignin';
import isSignin from 'modules/isSignin';
import setToken from 'modules/setToken';
import { useSetRecoilState } from 'recoil';

const useSignout = () => {
  const setIsSignin = useSetRecoilState(isSigninState);

  const signout = () => {
    setToken.clear();
    setIsSignin(isSignin());
  };

  return { signout };
};

export default useSignout;
