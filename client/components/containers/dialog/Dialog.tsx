import Button from '@atoms/button/Button';
import useControlDialog from 'hooks/useControlDialog';
import { HTMLAttributes, useEffect, useRef } from 'react';
import style from './Dialog.module.scss';

const Dialog = ({ children }: HTMLAttributes<HTMLElement>) => {
  const { closeDialogAllHandler } = useControlDialog();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const $firstFocusible = ref.current?.querySelectorAll('input, button')[0] as HTMLElement;

    $firstFocusible?.focus();
  }, []);

  return (
    <section className={style.container} ref={ref}>
      {children}
      <Button
        onClick={closeDialogAllHandler}
        onKeyDown={(e) => {
          e.preventDefault();
          if (e.key !== 'Tab') return;
          const $firstFocusible = ref.current?.querySelectorAll('input, button')[0] as HTMLElement;
          $firstFocusible.focus();
        }}
      >
        X
      </Button>
    </section>
  );
};

export default Dialog;
