import Heading from '@atoms/heading/Heading';
import IconButton from '@atoms/iconButton/IconButton';
import Nav from '@molecules/nav/Nav';
import { sideBarState } from '@recoil/sideBar';
import logo from '@public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import style from './SideBar.module.scss';
import Sign from '@molecules/sign/Sign';

const SideBar = () => {
  const [sideBar, setSideBar] = useRecoilState(sideBarState);

  return (
    <div
      className={style.wrap + ' ' + (sideBar ? '' : style.hide)}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        setSideBar((pre) => !pre);
      }}
    >
      <section
        className={style.container}
        onClick={(e) => {
          if (e.target === e.currentTarget) return;
          setSideBar((pre) => !pre);
        }}
      >
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
        <IconButton icon="fas fa-times" aria-label="닫기" title="닫기" />
      </section>
    </div>
  );
};

export default SideBar;
