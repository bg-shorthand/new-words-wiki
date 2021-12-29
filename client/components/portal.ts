import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilState } from 'recoil';
import { isOpenState } from '@recoil/isOpen';

const Portal = ({ children }) => {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  useEffect(() => {
    console.log('?');
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector('#portal')) : null;
};

export default Portal;
