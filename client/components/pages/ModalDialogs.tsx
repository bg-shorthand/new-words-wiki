import AlertDialog from '@organisms/alertDialog/AlertDialog';
import FindPassword from '@organisms/findPassword/FindPassword';
import Signin from '@organisms/signin/Signin';
import Signup from '@organisms/signup/Signup';
import { dialogsState, imageState } from '@recoil/modalDialog';
import ModalDialog from '@templates/modalDialog/ModalDialog';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

const ModalDialogs = () => {
  const dialogs = useRecoilValue(dialogsState);
  const imageSrc = useRecoilValue(imageState);

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
      {dialogs.image && (
        <ModalDialog>
          <Image src={imageSrc} />
        </ModalDialog>
      )}
    </>
  );
};

export default ModalDialogs;
