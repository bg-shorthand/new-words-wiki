import Button from '@atoms/button/Button';
import useCloseModalDialog from 'hooks/useCloseModalDialog';
import { HTMLAttributes } from 'react';
import style from './Dialog.module.scss';

const Dialog = ({ children }: HTMLAttributes<HTMLElement>) => {
  const closeDialog = useCloseModalDialog();

  return (
    <section className={style.container}>
      {children}
      <Button onClick={closeDialog}>X</Button>
    </section>
  );
};

export default Dialog;
