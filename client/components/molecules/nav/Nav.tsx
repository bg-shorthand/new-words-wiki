import Button from '@atoms/button/Button';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import { myInfoState } from '@recoil/myInfo';
import useSignout from '@hooks/useSignout';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import style from './Nav.module.scss';
import Link from 'next/link';

const Nav = () => {
  const isSignin = useRecoilValue(isSigninState);
  const myInfo = useRecoilValue(myInfoState);
  const setDialogs = useSetRecoilState(dialogsState);

  const { signout } = useSignout();

  return (
    <ul className={style.container}>
      <li>
        <Link href="/guide">
          <a>
            <i aria-hidden className="far fa-file-alt"></i> 가이드
          </a>
        </Link>
      </li>
      <li>
        <Link href="/write">
          <a
            onClick={(e) => {
              if (!isSignin) {
                e.preventDefault();
                setDialogs((pre) => ({ ...pre, needSignin: true }));
              }
            }}
          >
            <i aria-hidden className="far fa-edit"></i> 신조어 등록
          </a>
        </Link>
      </li>
      <li>
        <Link href="/community">
          <a>
            <i aria-hidden className="far fa-comments"></i> 커뮤니티
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
