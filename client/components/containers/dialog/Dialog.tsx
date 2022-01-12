import IconButton from '@atoms/iconButton/IconButton';
import SlideIn from '@templates/slidein/SlideIn';
import useControlDialog from 'hooks/useControlDialog';
import useControlDialogTab from 'hooks/useControlDialogTab';
import { HTMLAttributes } from 'react';
import style from './Dialog.module.scss';

const Dialog = ({ children }: HTMLAttributes<HTMLElement>) => {
  const { closeDialogAllHandler } = useControlDialog();
  const { dialogRef, focusFirstWhenKeyUpTab } = useControlDialogTab();

  return (
    <section className={style.container} ref={dialogRef}>
      {children}
      <IconButton
        onClick={closeDialogAllHandler}
        onKeyDown={focusFirstWhenKeyUpTab}
        icon="fas fa-times"
      />
      <SlideIn />
    </section>
  );
};

export default Dialog;
