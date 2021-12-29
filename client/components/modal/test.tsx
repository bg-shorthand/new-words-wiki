import { isOpenState } from '@recoil/isOpen';
import { useRecoilValue } from 'recoil';

const TestModal = () => {
  const { test } = useRecoilValue(isOpenState);
  return test ? <h2>Hello Portal</h2> : null;
};

export default TestModal;
