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
import Sign from '@molecules/sign/Sign';

const Header = () => {
  const setSidebar = useSetRecoilState(sideBarState);

  return (
    <header className={style.container}>
      <Heading level={1}>
        <Link href="/">
          <a>
            <Image src={logo} width={20} height={20} alt="신조어 위키 로고" />{' '}
            <span>신조어 위키</span>
          </a>
        </Link>
      </Heading>
      <Nav />
      <Sign />
      <Search />
      <IconButton
        icon="fas fa-bars"
        aria-label="메뉴"
        title="메뉴"
        onClick={() => setSidebar((pre) => !pre)}
      />
    </header>
  );
};

export default Header;
