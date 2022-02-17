import Button from '@atoms/button/Button';
import { alertContentState, dialogsState } from '@recoil/modalDialog';
import { useRecoilValue, useResetRecoilState } from 'recoil';

const AlertDialog = () => {
  const { message, callback } = useRecoilValue(alertContentState);
  const resetDialogs = useResetRecoilState(dialogsState);

  return (
    <>
      <h1>안내</h1>
      <p>{message}</p>
      <Button
        size="s"
        onClick={() => {
          resetDialogs();
          callback && callback();
        }}
      >
        확인
      </Button>
    </>
  );
};

export default AlertDialog;
