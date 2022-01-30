import Button from '@atoms/button/Button';
import NickName from '@atoms/nickname/NickName';
import useSignout from '@hooks/useSignout';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import Link from 'next/link';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import style from './Sign.module.scss';

const Sign = () => {
  const isSignin = useRecoilValue(isSigninState);
  const setDialogs = useSetRecoilState(dialogsState);

  const { signout } = useSignout();
  return (
    <div className={style.container}>
      {isSignin ? (
        <>
          <Link href={'/myPage'}>
            <a>
              <i aria-hidden className="far fa-user"></i> <NickName />
            </a>
          </Link>
          <Button size="s" onClick={() => signout()}>
            로그아웃
          </Button>
        </>
      ) : (
        <>
          <Button size="s" onClick={() => setDialogs((pre) => ({ ...pre, signin: true }))}>
            로그인
          </Button>
          <Button size="s" onClick={() => setDialogs((pre) => ({ ...pre, signup: true }))}>
            회원가입
          </Button>
        </>
      )}
    </div>
  );
};

export default Sign;
