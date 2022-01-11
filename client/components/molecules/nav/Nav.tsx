import Button from '@atoms/button/Button';
import useControlDialog from 'hooks/useControlDialog';
import useIsSignin from 'hooks/useIsSignin';
import useSignout from 'hooks/useSignout';
import style from './Nav.module.scss';

const Nav = () => {
  const { openDialogHandler: openSigninDialog } = useControlDialog('signin');
  const { openDialogHandler: openSignupDialog } = useControlDialog('signup');
  const { isSignin } = useIsSignin();
  const { signout } = useSignout();

  return (
    <ul className={style.container}>
      {isSignin ? (
        <>
          <li>
            <Button onClick={() => signout()}>로그아웃</Button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Button onClick={openSigninDialog}>로그인</Button>
          </li>
          <li>
            <Button onClick={openSignupDialog}>회원가입</Button>
          </li>
        </>
      )}
    </ul>
  );
};

export default Nav;
