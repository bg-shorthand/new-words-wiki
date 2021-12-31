import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { dialogsState } from '@recoil/modalDialog';

const Home: NextPage = () => {
  const setDialogs = useSetRecoilState(dialogsState);

  return (
    <>
      <h1 onClick={() => setDialogs((pre) => ({ ...pre, login: !pre.login }))}>Hellow World</h1>
    </>
  );
};

export default Home;
