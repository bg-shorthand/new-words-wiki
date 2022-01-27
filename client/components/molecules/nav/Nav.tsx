import { dialogsState } from '@recoil/modalDialog';
import useSignout from '@hooks/useSignout';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import style from './Nav.module.scss';
import Link from 'next/link';
import { isSigninState } from '@recoil/isSignin';

const Nav = () => {
  const isSignin = useRecoilValue(isSigninState);
  const setDialogs = useSetRecoilState(dialogsState);

  const { signout } = useSignout();

  return (
    <nav>
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
          <Link href="/community/1">
            <a>
              <i aria-hidden className="far fa-comments"></i> 커뮤니티
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
