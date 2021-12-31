import Login from '@organisms/login/Login';
import { dialogsState } from '@recoil/modalDialog';
import ModalDialog from '@templates/modalDialog/ModalDialog';
import { useRecoilValue } from 'recoil';

const ModalDialogs = () => {
  const dialogs = useRecoilValue(dialogsState);

  return <ModalDialog>{dialogs.login && <Login />}</ModalDialog>;
};

export default ModalDialogs;
