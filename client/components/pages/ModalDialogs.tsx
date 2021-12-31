import Signin from '@organisms/signin/Signin';
import { dialogsState } from '@recoil/modalDialog';
import ModalDialog from '@templates/modalDialog/ModalDialog';
import { useRecoilValue } from 'recoil';

const ModalDialogs = () => {
  const dialogs = useRecoilValue(dialogsState);

  return <ModalDialog>{dialogs.signin && <Signin />}</ModalDialog>;
};

export default ModalDialogs;
