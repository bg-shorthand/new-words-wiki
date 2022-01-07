import Button from '@atoms/button/Button';
import useControlDialog from 'hooks/useControlDialog';
import style from './Nav.module.scss';

const Nav = () => {
  const { openDialogHandler: openSigninDialog } = useControlDialog('signin');
  const { openDialogHandler: openSignupDialog } = useControlDialog('signup');

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
