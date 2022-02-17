import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import dynamic from 'next/dynamic';

const DefaultLayout = dynamic(() => import('@templates/defaultLayout/DefaultLayout'));
const SideBar = dynamic(() => import('@organisms/sideBar/SideBar'));
const ModalDialogs = dynamic(() => import('@components/pages/ModalDialogs'));

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
