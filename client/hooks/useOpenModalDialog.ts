import { dialogsState } from '@recoil/modalDialog';
import { MouseEventHandler } from 'react';
import { useSetRecoilState } from 'recoil';

const useOpenModalDialog = (content: string) => {
  const setDialogs = useSetRecoilState(dialogsState);

  const openDialogHandler: MouseEventHandler = () =>
    setDialogs((pre) => ({ ...pre, [content]: true }));

  return openDialogHandler;
};

export default useOpenModalDialog;
