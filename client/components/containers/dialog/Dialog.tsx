import Button from '@atoms/button/Button';
import useControlDialog from 'hooks/useControlDialog';
import { HTMLAttributes } from 'react';
import style from './Dialog.module.scss';

const Dialog = ({ children }: HTMLAttributes<HTMLElement>) => {
  const { closeDialogAllHandler } = useControlDialog();

  return (
    <section className={style.container}>
      {children}
      <Button onClick={closeDialogAllHandler}>X</Button>
    </section>
  );
};

export default Dialog;
