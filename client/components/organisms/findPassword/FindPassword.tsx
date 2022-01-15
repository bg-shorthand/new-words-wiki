import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import EmailAuthForm from '@molecules/emailAuthForm/EmailAuthForm';
import FindPasswordForm from '@molecules/findPasswordForm/FindPasswrdForm';
import { dialogsState } from '@recoil/modalDialog';
import { useState } from 'react';
import { useResetRecoilState } from 'recoil';

const FindPassword = () => {
  const [stage, setStage] = useState(0);
  const [email, setEmail] = useState('');

  const resetDialogs = useResetRecoilState(dialogsState);

  return (
    <>
      <Heading level={1}>비밀번호 찾기</Heading>
      {stage === 0 && (
        <>
          <Alert>
            <i className="fas fa-flag-checkered"></i> 가입하신 이메일을 인증해주세요.
          </Alert>
          <EmailAuthForm email={email} setEmail={setEmail} mustRegist={true} setStage={setStage} />
        </>
      )}
      {stage === 1 && (
        <>
          <Alert textAlign="left">
            <i className="fas fa-flag-checkered"></i> 새로운 비밀번호를 등록해주세요.
          </Alert>
          <FindPasswordForm email={email} setStage={setStage} />
        </>
      )}
      {stage === 2 && (
        <>
          <Alert>비밀번호가 수정되었습니다. 로그인 해주세요.</Alert>
          <Button size="s" onClick={resetDialogs}>
            완료
          </Button>
        </>
      )}
    </>
  );
};

export default FindPassword;
