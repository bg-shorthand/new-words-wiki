import Dialog from '@containers/dialog/Dialog';
import Modal from '@containers/modal/Modal';
import Portal from '@containers/portal/portal';
import { isOpenModalState } from '@recoil/modalDialog';
import { HTMLAttributes } from 'react';
import { useRecoilValue } from 'recoil';

const ModalDialog = ({ children }: HTMLAttributes<HTMLElement>) => {
  const isOpenModal = useRecoilValue(isOpenModalState);

  return (
    <Portal>
      {isOpenModal ? (
        <Modal>
          <Dialog>{children}</Dialog>
        </Modal>
      ) : null}
    </Portal>
  );
};

export default ModalDialog;
