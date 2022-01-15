import Footer from '@organisms/footer/Footer';
import Header from '@organisms/header/Header';
import useInitSigninState from '@hooks/useInitSigninState';
import { HTMLAttributes } from 'react';
import style from './defaultLayout.module.scss';

const DefaultLayout = ({ children }: HTMLAttributes<HTMLElement>) => {
  useInitSigninState();

  return (
    <div className={style.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
