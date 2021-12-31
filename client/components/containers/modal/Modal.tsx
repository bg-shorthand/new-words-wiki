import { DefaultProps } from 'const/types';
import useCloseModalDialog from 'hooks/useCloseModalDialog';
import style from './Modal.module.scss';

const Modal = ({ children }: DefaultProps) => {
  const closeDialog = useCloseModalDialog();

  return (
    <div className={style.container} onClick={closeDialog}>
      {children}
    </div>
  );
};

export default Modal;
