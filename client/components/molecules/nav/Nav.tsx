import Button from '@atoms/button/Button';
import useOpenModalDialog from 'hooks/useOpenModalDialog';
import style from './Nav.module.scss';

const Nav = () => {
  const openLoginDialog = useOpenModalDialog('login');
  return (
    <ul className={style.container}>
      <li>
        <Button onClick={openLoginDialog}>Sign-in</Button>
      </li>
      <li>
        <Button>Sign-up</Button>
      </li>
    </ul>
  );
};

export default Nav;
