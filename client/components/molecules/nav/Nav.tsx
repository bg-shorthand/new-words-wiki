import Button from '@atoms/button/Button';
import useOpenModalDialog from 'hooks/useOpenModalDialog';
import style from './Nav.module.scss';

const Nav = () => {
  const openSigninDialog = useOpenModalDialog('signin');
  return (
    <ul className={style.container}>
      <li>
        <Button onClick={openSigninDialog}>Sign-in</Button>
      </li>
      <li>
        <Button>Sign-up</Button>
      </li>
    </ul>
  );
};

export default Nav;
