import { alertContentState, dialogsState } from '@recoil/modalDialog';
import { useSetRecoilState } from 'recoil';

const useOpenAlertDialog = () => {
  const setDialogs = useSetRecoilState(dialogsState);
  const setAlertContent = useSetRecoilState(alertContentState);

  const openAlertDialog = (message: string, callback?: () => void) => {
    setAlertContent({ message, callback: callback ? callback : () => {} });
    setDialogs((pre) => ({ ...pre, alert: true }));
  };

  return openAlertDialog;
};

export default useOpenAlertDialog;
