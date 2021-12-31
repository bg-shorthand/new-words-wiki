import Footer from '@organisms/footer/Footer';
import Header from '@organisms/header/Header';
import { DefaultProps } from 'const/types';
import style from './defaultLayout.module.scss';

const DefaultLayout = ({ children }: DefaultProps) => {
  return (
    <div className={style.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
