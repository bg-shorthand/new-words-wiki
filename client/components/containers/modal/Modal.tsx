import { DefaultProps } from 'const/types';
import style from './Modal.module.scss';

const Modal = ({ children }: DefaultProps) => {
  return <div className={style.container}>{children}</div>;
};

export default Modal;
