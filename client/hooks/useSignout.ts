import { isSigninState } from '@recoil/isSignin';
import { myInfoState } from '@recoil/myInfo';
import setToken from 'modules/setToken';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

const useSignout = () => {
  const setIsSignin = useSetRecoilState(isSigninState);
  const resetMyInfo = useResetRecoilState(myInfoState);

  const signout = () => {
    setToken.clear();
    setIsSignin(false);
    resetMyInfo();
  };

  return { signout };
};

export default useSignout;
