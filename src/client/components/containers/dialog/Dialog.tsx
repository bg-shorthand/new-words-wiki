import IconButton from '@atoms/iconButton/IconButton';
import { dialogsState } from '@recoil/modalDialog';
import SlideIn from '@templates/slidein/SlideIn';
import useControlDialogTab from '@hooks/useControlDialogTab';
import { HTMLAttributes } from 'react';
import { useResetRecoilState } from 'recoil';
import style from './Dialog.module.scss';

const Dialog = ({ children }: HTMLAttributes<HTMLElement>) => {
  const resetDialog = useResetRecoilState(dialogsState);
  const { dialogRef, focusFirstWhenKeyUpTab } = useControlDialogTab();

  return (
    <section className={style.container} ref={dialogRef}>
      {children}
      <IconButton
        onClick={resetDialog}
        onKeyDown={focusFirstWhenKeyUpTab}
        icon="fas fa-times"
        aria-label="닫기"
        title="닫기"
      />
      <SlideIn />
    </section>
  );
};

export default Dialog;
