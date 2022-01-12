import Button from '@atoms/button/Button';
import { dialogsState } from '@recoil/modalDialog';
import useGetMyInfo from 'hooks/useGetMyInfo';
import useIsSignin from 'hooks/useIsSignin';
import useSignout from 'hooks/useSignout';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import style from './Nav.module.scss';

const Nav = () => {
  const setDialogs = useSetRecoilState(dialogsState);
  const { isSignin, setIsSigninAsync } = useIsSignin();
  const { signout } = useSignout();
  const { myInfo, getMyInfo } = useGetMyInfo();

  useEffect(() => {
    setIsSigninAsync();
    getMyInfo();
  }, []);

  return (
    <ul className={style.container}>
      {isSignin ? (
        <>
          <li>{myInfo.nickname}</li>
          <li>
            <Button size="s" onClick={() => signout()}>
              로그아웃
            </Button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Button size="s" onClick={() => setDialogs((pre) => ({ ...pre, signin: true }))}>
              로그인
            </Button>
          </li>
          <li>
            <Button size="s" onClick={() => setDialogs((pre) => ({ ...pre, signup: true }))}>
              회원가입
            </Button>
          </li>
        </>
      )}
    </ul>
  );
};

export default Nav;
