import Button from '@atoms/button/Button';
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
      <Button onClick={closeDialogAllHandler} onKeyDown={focusFirstWhenKeyUpTab}>
        X
      </Button>
    </section>
  );
};

export default Dialog;
