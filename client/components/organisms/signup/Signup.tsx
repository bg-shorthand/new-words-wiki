import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import EmailAuthForm from '@molecules/emailAuthForm/EmailAuthForm';
import SignupForm from '@molecules/signupForm/SignupForm';
import useControlDialog from 'hooks/useControlDialog';
import { useState } from 'react';
import style from './Signup.module.scss';

const Signup = () => {
  const [stage, setStage] = useState(0);
  const [email, setEmail] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const { closeDialogAllHandler } = useControlDialog();

  return (
    <>
      <Heading level={1} className={style.heading}>
        회원 가입
      </Heading>
      {stage === 0 && (
        <>
          <Alert>인증된 이메일은 ID로 사용됩니다.</Alert>
          <EmailAuthForm email={email} setEmail={setEmail} setIsComplete={setIsComplete} />
        </>
      )}
      {stage === 1 && (
        <>
          <Alert>인증된 이메일은 ID로 사용됩니다.</Alert>
          <SignupForm email={email} setStage={setStage} />
        </>
      )}
      {stage === 2 && (
        <>
          <Alert>환영합니다. 로그인 해주세요.</Alert>
          <Button onClick={closeDialogAllHandler}>완료</Button>
        </>
      )}
      {stage === 0 && (
        <Button onClick={() => setStage((pre) => (pre += 1))} disabled={!isComplete}>
          다음
        </Button>
      )}
    </>
  );
};

export default Signup;
