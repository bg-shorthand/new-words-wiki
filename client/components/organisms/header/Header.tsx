import Heading from '@atoms/heading/Heading';
import Nav from '@molecules/nav/Nav';
import Search from '@molecules/search/Search';
import logo from '@public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import style from './Header.module.scss';
import IconButton from '@atoms/iconButton/IconButton';
import { useSetRecoilState } from 'recoil';
import { sideBarState } from '@recoil/sideBar';

const Header = () => {
  const setSidebar = useSetRecoilState(sideBarState);

  return (
    <header className={style.container}>
      <Heading level={1}>
        <Link href="/">
          <a>
            <Image src={logo} width={20} height={20} /> <span>신조어 위키</span>
          </a>
        </Link>
      </Heading>
      <Nav />
      <Search />
      <IconButton icon="fas fa-bars" onClick={() => setSidebar((pre) => !pre)} />
    </header>
  );
};

export default Header;
