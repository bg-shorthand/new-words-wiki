import { HTMLAttributes, useEffect } from 'react';
import style from './Modal.module.scss';

const Modal = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return <div className={style.container}>{children}</div>;
};

export default Modal;
