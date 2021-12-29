import Dialog from '@containers/dialog/Dialog';
import Modal from '@containers/modal/Modal';
import { isOpenState } from '@recoil/isOpen';
import Login from 'components/organisms/login/Login';
import { useRecoilValue } from 'recoil';

const LoginModalDialog = () => {
  const isOpen = useRecoilValue(isOpenState).login;

  return isOpen ? (
    <Modal>
      <Dialog>
        <Login />
      </Dialog>
    </Modal>
  ) : null;
};

export default LoginModalDialog;
