import { isSigninState } from '@recoil/isSignin';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import isSignin from 'modules/isSignin';

const useInitSigninState = () => {
  const setIsSignin = useSetRecoilState(isSigninState);

  useEffect(() => {
    setIsSignin(isSignin());
  }, []);
};

export default useInitSigninState;
