import Heading from '@atoms/heading/Heading';
import Nav from '@molecules/nav/Nav';
import Search from '@molecules/search/Search';
import Image from 'next/image';
import Link from 'next/link';
import style from './Header.module.scss';
import logo from '../../../public/logo.png';

const Header = () => {
  return (
    <header className={style.container}>
      <Heading level={1}>
        <Link href="/">
          <a>
            <Image src={logo} width={20} height={20} /> 신조어 위키
          </a>
        </Link>
      </Heading>
      <Search />
      <Nav />
    </header>
  );
};

export default Header;
