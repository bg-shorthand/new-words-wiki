import Button from '@atoms/button/Button';
import { dialogsState } from '@recoil/modalDialog';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

const NeedSignin = () => {
  const resetDialogs = useResetRecoilState(dialogsState);
  const setDialogs = useSetRecoilState(dialogsState);

  return (
    <>
      <h1>안내</h1>
      <p>로그인이 필요합니다.</p>
      <Button
        size="s"
        onClick={() => {
          resetDialogs();
          setDialogs((pre) => ({ ...pre, signin: true }));
        }}
      >
        로그인
      </Button>
    </>
  );
};

export default NeedSignin;
