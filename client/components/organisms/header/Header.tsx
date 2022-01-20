import Heading from '@atoms/heading/Heading';
import Nav from '@molecules/nav/Nav';
import Search from '@molecules/search/Search';
import Link from 'next/link';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.container}>
      <Heading level={1}>
        <Link href="/">
          <a>New Words Wiki</a>
        </Link>
      </Heading>
      <Search />
      <Nav />
    </header>
  );
};

export default Header;
