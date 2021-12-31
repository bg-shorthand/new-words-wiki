import { DefaultProps } from 'const/types';
import useCloseModalDialog from 'hooks/useCloseModalDialog';
import style from './Dialog.module.scss';

const Dialog = ({ children }: DefaultProps) => {
  const closeDialog = useCloseModalDialog();

  return (
    <section className={style.container}>
      {children}
      <button onClick={closeDialog}>X</button>
    </section>
  );
};

export default Dialog;
