import { isSigninState } from '@recoil/isSignin';
import { useSetRecoilState } from 'recoil';

const useSignout = () => {
  const setIsSignin = useSetRecoilState(isSigninState);

  const signout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setIsSignin(false);
  };

  return { signout };
};

export default useSignout;
