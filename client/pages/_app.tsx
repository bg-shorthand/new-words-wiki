import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import ModalDialogs from '@components/pages/ModalDialogs';
import DefaultLayout from '@templates/defaultLayout/DefaultLayout';
import SideBar from '@organisms/sideBar/SideBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <SideBar />
      <ModalDialogs />
    </RecoilRoot>
  );
}

export default MyApp;
