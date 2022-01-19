import { HTMLAttributes } from 'react';
import style from './MainLayout.module.scss';

const MainLayout = ({ children }: HTMLAttributes<HTMLElement>) => {
  return <section className={style.container}>{children}</section>;
};

export default MainLayout;
