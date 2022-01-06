import Button from '@atoms/button/Button';
import LabelInput from '@molecules/labelInput/LabelInput';
import useSignup from 'hooks/useSignup';
import useValidString from 'hooks/useValidString';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './SignupForm.module.scss';

interface SignupFormProps {
  email: string;
  setStage?: Dispatch<SetStateAction<number>>;
}

const SignupForm = ({ email, setStage }: SignupFormProps) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [samePassword, setSamePassword] = useState('');
  const [isSamePassword, setIsSamePassword] = useState(false);

  const { isCorrect, validStringHandler } = useValidString('password');
  const { isUniqueNickname, isSuccess, signupHandler } = useSignup({ email, nickname, password });

  useEffect(() => {
    if (isSuccess && setStage) setStage((pre) => (pre += 1));
  }, [isSuccess]);

  return (
    <form className={style.container}>
      <LabelInput id="signupEmail" label="이메일" value={email} disabled />
      <LabelInput
        id="signupNickname"
        label="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.currentTarget.value)}
        validations={[{ isAlert: !isUniqueNickname, alert: '이미 등록된 닉네임입니다.' }]}
      />
      <LabelInput
        id="signupPassword"
        label="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        type="password"
        onBlur={validStringHandler}
        validations={[
          {
            isAlert: !isCorrect,
            alert: '비밀번호는 영문, 숫자, 특수문자를 포함해 8자리 이상이어야 합니다.',
          },
        ]}
      />
      <LabelInput
        id="checkSignupPassword"
        label="이메일 확인"
        value={samePassword}
        onChange={(e) => setSamePassword(e.currentTarget.value)}
        type="password"
        onBlur={() => setIsSamePassword(password === samePassword)}
        validations={[{ isAlert: !isSamePassword, alert: '비밀번호가 다릅니다.' }]}
      />
      <Button onClick={signupHandler}>가입</Button>
    </form>
  );
};

export default SignupForm;
