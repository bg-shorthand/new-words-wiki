import { dialogsState } from '@recoil/modalDialog';
import { Dialogs } from 'const/types';
import { MouseEventHandler } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

const useControlDialog = (content?: Dialogs) => {
  const setDialogs = useSetRecoilState(dialogsState);
  const resetDialogs = useResetRecoilState(dialogsState);

  const closeDialogAllHandler: MouseEventHandler = (e) =>
    e.target === e.currentTarget && resetDialogs();

  if (content) {
    const openDialogHandler: MouseEventHandler = () =>
      setDialogs((pre) => ({ ...pre, [content]: true }));

    const closeDialogHandler: MouseEventHandler = () =>
      setDialogs((pre) => ({ ...pre, [content]: false }));

    return { openDialogHandler, closeDialogHandler, closeDialogAllHandler };
  }

  return { closeDialogAllHandler };
};

export default useControlDialog;
