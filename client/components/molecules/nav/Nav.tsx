import Button from '@atoms/button/Button';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import { myInfoState } from '@recoil/myInfo';
import useOpenAlertDialog from '@hooks/useOpenAlertDialog';
import useSignout from '@hooks/useSignout';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import style from './Nav.module.scss';
import Link from 'next/link';

const Nav = () => {
  const isSignin = useRecoilValue(isSigninState);
  const myInfo = useRecoilValue(myInfoState);
  const setDialogs = useSetRecoilState(dialogsState);

  const openAlertDialog = useOpenAlertDialog();
  const { signout } = useSignout();

  return (
    <ul className={style.container}>
      <li>
        <Link href="/write">
          <a
            onClick={(e) => {
              if (!isSignin) {
                e.preventDefault();
                openAlertDialog('로그인이 필요합니다.');
              }
            }}
          >
            <i aria-hidden className="far fa-edit"></i> 신조어 등록
          </a>
        </Link>
      </li>
      {isSignin ? (
        <>
          <li>
            <i aria-hidden className="far fa-user"></i> {myInfo.nickname}
          </li>
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
