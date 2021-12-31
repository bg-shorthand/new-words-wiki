import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Nav from '@molecules/nav/Nav';
import useOpenModalDialog from 'hooks/useOpenModalDialog';
import Link from 'next/link';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.container}>
      <Heading>
        <Link href="/">
          <a>New Words Wiki</a>
        </Link>
      </Heading>
      <Nav />
    </header>
  );
};

export default Header;
