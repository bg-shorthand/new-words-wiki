import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import EmailAuthForm from '@molecules/emailAuthForm/EmailAuthForm';
import NewNicknameForm from '@molecules/newNicknameForm/NewNicknameForm';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import { useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

const ChangeNickname = () => {
  const [state, setState] = useState(0);

  const userInfo = useRecoilValue(isSigninState);
  const resetDialogs = useResetRecoilState(dialogsState);

  return (
    <>
      <Heading level={1}>닉네임 수정</Heading>
      {state === 0 && (
        <>
          <Alert>닉네임 수정시 등급이 초기화 됩니다.</Alert>
          <Alert>계속 하시겠습니까?</Alert>
          <Button onClick={() => setState((pre) => (pre += 1))}>계속</Button>
        </>
      )}
      {state === 1 && (
        <>
          <Alert textAlign="left">
            <i aria-hidden className="fas fa-flag-checkered"></i> 가입하신 이메일을 인증해주세요.
          </Alert>
          <EmailAuthForm email={userInfo?.email || ''} setStage={setState} mustRegist={true} />
        </>
      )}
      {state === 2 && (
        <>
          <Alert textAlign="left">
            <i aria-hidden className="fas fa-flag-checkered"></i> 새로운 닉네임을 등록해주세요.
          </Alert>
          <NewNicknameForm email={userInfo?.email || ''} setStage={setState} />
        </>
      )}
      {state === 3 && (
        <>
          <Alert>닉네임이 수정되었습니다.</Alert>
          <Button onClick={() => resetDialogs()}>확인</Button>
        </>
      )}
    </>
  );
};

export default ChangeNickname;
