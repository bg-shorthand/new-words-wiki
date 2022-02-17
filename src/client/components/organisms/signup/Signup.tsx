import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import EmailAuthForm from '@molecules/emailAuthForm/EmailAuthForm';
import SignupForm from '@molecules/signupForm/SignupForm';
import { dialogsState } from '@recoil/modalDialog';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const Signup = () => {
  const [stage, setStage] = useState(0);
  const [email, setEmail] = useState('');

  const setDialogs = useSetRecoilState(dialogsState);

  return (
    <>
      <Heading level={1}>회원 가입</Heading>
      {stage === 0 && (
        <>
          <Alert textAlign="left">
            <i aria-hidden className="fas fa-flag-checkered"></i> 이메일을 인증해주세요. 인증된
            이메일은 ID로 사용됩니다.
          </Alert>
          <EmailAuthForm email={email} setEmail={setEmail} mustRegist={false} setStage={setStage} />
        </>
      )}
      {stage === 1 && (
        <>
          <Alert textAlign="left">
            <i aria-hidden className="fas fa-flag-checkered"></i> 앞서 인증된 이메일은 ID로
            사용됩니다.
          </Alert>
          <SignupForm email={email} setStage={setStage} />
        </>
      )}
      {stage === 2 && (
        <>
          <Alert>환영합니다. 로그인 해주세요.</Alert>
          <Button
            size="s"
            onClick={() => setDialogs((pre) => ({ ...pre, signup: false, signin: true }))}
          >
            로그인
          </Button>
        </>
      )}
    </>
  );
};

export default Signup;
