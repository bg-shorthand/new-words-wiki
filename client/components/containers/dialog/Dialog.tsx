import { DefaultProps } from 'const/types';
import style from './Dialog.module.scss';

const Dialog = ({ children }: DefaultProps) => {
  return (
    <section className={style.container}>
      {children}
      <button>X</button>
    </section>
  );
};

export default Dialog;
