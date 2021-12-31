import { dialogsState } from '@recoil/modalDialog';
import { MouseEventHandler } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

const useCloseModalDialog = () => {
  const setDialogs = useResetRecoilState(dialogsState);

  const closeDialogHandler: MouseEventHandler = (e) => e.target === e.currentTarget && setDialogs();

  return closeDialogHandler;
};

export default useCloseModalDialog;
