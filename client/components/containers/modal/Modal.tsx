import useCloseModalDialog from 'hooks/useCloseModalDialog';
import { HTMLAttributes } from 'react';
import style from './Modal.module.scss';

const Modal = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  const closeDialog = useCloseModalDialog();

  return (
    <div className={style.container} onClick={closeDialog}>
      {children}
    </div>
  );
};

export default Modal;
