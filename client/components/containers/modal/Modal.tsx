import { HTMLAttributes } from 'react';
import style from './Modal.module.scss';

const Modal = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={style.container}>{children}</div>;
};

export default Modal;
