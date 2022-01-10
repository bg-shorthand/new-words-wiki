import Button from '@atoms/button/Button';
import useControlDialog from 'hooks/useControlDialog';
import useIsSignin from 'hooks/useIsSignin';
import style from './Nav.module.scss';

const Nav = () => {
  const { openDialogHandler: openSigninDialog } = useControlDialog('signin');
  const { openDialogHandler: openSignupDialog } = useControlDialog('signup');
  const { isSignin, user } = useIsSignin();

  return (
    <ul className={style.container}>
      {isSignin ? (
        <>
          <li>{user?.nickname}</li>
          <li>
            <Button>로그아웃</Button>
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
