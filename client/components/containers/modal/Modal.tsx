import useControlDialog from 'hooks/useControlDialog';
import { HTMLAttributes } from 'react';
import style from './Modal.module.scss';

const Modal = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  const { closeDialogAllHandler } = useControlDialog();

  return (
    <div className={style.container} onMouseDown={closeDialogAllHandler}>
      {children}
    </div>
  );
};

export default Modal;
