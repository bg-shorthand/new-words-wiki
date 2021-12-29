import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import Portal from '@components/portal';
import TestModal from '@components/modal/test';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Portal>
        <TestModal />
      </Portal>
    </RecoilRoot>
  );
}

export default MyApp;
