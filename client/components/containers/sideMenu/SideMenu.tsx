import SlideIn from '@templates/slidein/SlideIn';
import { HTMLAttributes } from 'react';
import style from './SideMenu.module.scss';

const SideMenu = ({ children }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={style.container}>
      {children}
      <SlideIn />
    </section>
  );
};

export default SideMenu;
