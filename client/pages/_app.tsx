import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import style from '../styles/layout.module.scss';
import ModalDialogs from '@components/pages/ModalDialogs';
import Header from '@organisms/header/Header';
import Footer from '@organisms/footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className={style.container}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <ModalDialogs />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
