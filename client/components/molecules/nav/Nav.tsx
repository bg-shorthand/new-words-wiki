import Button from '@atoms/button/Button';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import { myInfoState } from '@recoil/myInfo';
import useSignout from 'hooks/useSignout';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import style from './Nav.module.scss';

const Nav = () => {
  const isSignin = useRecoilValue(isSigninState);
  const myInfo = useRecoilValue(myInfoState);
  const setDialogs = useSetRecoilState(dialogsState);
  const { signout } = useSignout();

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
