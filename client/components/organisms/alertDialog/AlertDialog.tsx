import Button from '@atoms/button/Button';
import { alertMessageState, dialogsState } from '@recoil/modalDialog';
import { useRecoilValue, useResetRecoilState } from 'recoil';

const AlertDialog = () => {
  const message = useRecoilValue(alertMessageState);
  const resetDialogs = useResetRecoilState(dialogsState);

  return (
    <>
      <h1>안내</h1>
      <p>{message}</p>
      <Button onClick={() => resetDialogs()}>확인</Button>
    </>
  );
};

export default AlertDialog;
