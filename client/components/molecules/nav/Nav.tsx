import Button from '@atoms/button/Button';
import useOpenModalDialog from 'hooks/useOpenModalDialog';
import style from './Nav.module.scss';

const Nav = () => {
  const openSigninDialog = useOpenModalDialog('signin');
  const openSignupDialog = useOpenModalDialog('signup');

  return (
    <ul className={style.container}>
      <li>
        <Button onClick={openSigninDialog}>Sign-in</Button>
      </li>
      <li>
        <Button onClick={openSignupDialog}>Sign-up</Button>
      </li>
    </ul>
  );
};

export default Nav;
