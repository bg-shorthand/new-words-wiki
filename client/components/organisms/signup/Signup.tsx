import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import EmailAuthForm from '@molecules/emailAuthForm/EmailAuthForm';
import SignupForm from '@molecules/signupForm/SignupForm';
import { useState } from 'react';
import style from './Signup.module.scss';

const Signup = () => {
  const [stage, setStage] = useState(0);
  const [email, setEmail] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  return (
    <>
      <Heading className={style.heading}>회원 가입</Heading>
      {stage === 0 && (
        <EmailAuthForm email={email} setEmail={setEmail} setIsComplete={setIsComplete} />
      )}
      {stage === 1 && <SignupForm email={email} setStage={setStage} />}
      {stage === 2 && <Alert>완료</Alert>}
      {stage === 0 && (
        <Button onClick={() => setStage((pre) => (pre += 1))} disabled={!isComplete}>
          다음
        </Button>
      )}
    </>
  );
};

export default Signup;
