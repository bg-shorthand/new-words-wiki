import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import EmailAuthForm from '@molecules/emailAuthForm/EmailAuthForm';
import SignupForm from '@molecules/signupForm/SignupForm';
import { useEffect, useState } from 'react';
import style from './Signup.module.scss';

const Signup = () => {
  const [stage, setStage] = useState(0);
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [samePassword, setSamePassword] = useState('');

  return (
    <>
      <Heading className={style.heading}>회원 가입</Heading>
      {stage === 0 && <EmailAuthForm email={email} setEmail={setEmail} />}
      {stage === 1 && (
        <SignupForm
          email={email}
          nickname={nickname}
          setNickname={setNickname}
          password={password}
          setPassword={setPassword}
          samePassword={samePassword}
          setSamePassword={setSamePassword}
        />
      )}
      {stage !== 0 && <Button onClick={() => setStage((pre) => (pre -= 1))}>이전</Button>}
      {stage !== 1 && <Button onClick={() => setStage((pre) => (pre += 1))}>다음</Button>}
    </>
  );
};

export default Signup;
