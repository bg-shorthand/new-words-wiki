import { HTMLAttributes } from 'react';
import style from './MainLayout.module.scss';

const MainLayout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={style.container}>{children}</div>;
};

export default MainLayout;
