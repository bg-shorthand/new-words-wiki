import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import ModalDialogs from '@components/pages/ModalDialogs';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <ModalDialogs />
    </RecoilRoot>
  );
}

export default MyApp;
