import type { NextPage } from 'next';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isOpenState } from '@recoil/isOpen';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <h1 onClick={() => setIsOpen((pre) => ({ ...pre, test: !pre.test }))}>Hellow World</h1>
    </>
  );
};

export default Home;
