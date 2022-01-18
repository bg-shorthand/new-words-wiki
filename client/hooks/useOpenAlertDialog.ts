import { alertMessageState, dialogsState } from '@recoil/modalDialog';
import { useSetRecoilState } from 'recoil';

const useOpenAlertDialog = () => {
  const setDialogs = useSetRecoilState(dialogsState);
  const setAlertMessage = useSetRecoilState(alertMessageState);

  const openAlertDialog = (message: string) => {
    setAlertMessage(message);
    setDialogs((pre) => ({ ...pre, alert: true }));
  };

  return openAlertDialog;
};

export default useOpenAlertDialog;
