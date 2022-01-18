import AlertDialog from '@organisms/alertDialog/AlertDialog';
import FindPassword from '@organisms/findPassword/FindPassword';
import Signin from '@organisms/signin/Signin';
import Signup from '@organisms/signup/Signup';
import { dialogsState } from '@recoil/modalDialog';
import ModalDialog from '@templates/modalDialog/ModalDialog';
import { useRecoilValue } from 'recoil';

const ModalDialogs = () => {
  const dialogs = useRecoilValue(dialogsState);

  return (
    <>
      {dialogs.signin && (
        <ModalDialog>
          <Signin />
        </ModalDialog>
      )}
      {dialogs.signup && (
        <ModalDialog>
          <Signup />
        </ModalDialog>
      )}
      {dialogs.findPassword && (
        <ModalDialog>
          <FindPassword />
        </ModalDialog>
      )}
      {dialogs.alert && (
        <ModalDialog>
          <AlertDialog />
        </ModalDialog>
      )}
    </>
  );
};

export default ModalDialogs;
