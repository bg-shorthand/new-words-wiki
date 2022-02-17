import MyPage from '@components/pages/MyPage';
import { isSigninState } from '@recoil/isSignin';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const MyPagePage = () => {
  const isSignin = useRecoilValue(isSigninState);

  const router = useRouter();

  useEffect(() => {
    if (!isSignin) router.replace('/');
  }, [isSignin]);

  return <MyPage />;
};

export default MyPagePage;
