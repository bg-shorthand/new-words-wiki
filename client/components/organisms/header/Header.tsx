import Button from '@atoms/button/Button';
import useOpenModalDialog from 'hooks/useOpenModalDialog';
import Link from 'next/link';

const Header = () => {
  const openLoginDialog = useOpenModalDialog('login');

  return (
    <header>
      <h1>
        <Link href="/">
          <a>New Words Wiki</a>
        </Link>
      </h1>
      <ul>
        <li>
          <Button onClick={openLoginDialog}>Sign-in</Button>
        </li>
        <li>
          <Button>Sign-up</Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
