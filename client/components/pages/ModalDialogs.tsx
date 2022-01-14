import FindPassword from '@organisms/findPassword/FindPassword';
import Signin from '@organisms/signin/Signin';
import Signup from '@organisms/signup/Signup';
import { dialogsState } from '@recoil/modalDialog';
import ModalDialog from '@templates/modalDialog/ModalDialog';
import { useRecoilValue } from 'recoil';

const ModalDialogs = () => {
  const dialogs = useRecoilValue(dialogsState);

  return (
    <ModalDialog>
      {dialogs.signin && <Signin />}
      {dialogs.signup && <Signup />}
      {dialogs.findPassword && <FindPassword />}
    </ModalDialog>
  );
};

export default ModalDialogs;
