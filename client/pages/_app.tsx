import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import ModalDialogs from '@components/pages/ModalDialogs';
import DefaultLayout from '@templates/defaultLayout/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <ModalDialogs />
    </RecoilRoot>
  );
}

export default MyApp;
