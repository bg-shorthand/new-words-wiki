import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Input from '@atoms/input/Input';
import Label from '@atoms/label/Label';
import LabelInputContainer from '@containers/labelInputContainer/LabelInputContainer';
import { DefaultProps } from 'const/types';
import useSignup from 'hooks/useSignup';
import useValidString from 'hooks/useValidString';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './SignupForm.module.scss';

interface SignupFormProps extends DefaultProps {
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
      <LabelInputContainer>
        <Label htmlFor="signupEmail">Email</Label>
        <Input id="signupEmail" value={email} disabled />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="signupNickname">Nickname</Label>
        <Input
          id="signupNickname"
          value={nickname}
          onChange={(e) => setNickname(e.currentTarget.value)}
        />
        {!isUniqueNickname && <Alert>이미 등록된 닉네임입니다.</Alert>}
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="signupPwd">Password</Label>
        <Input
          id="signupPwd"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          password
          onBlur={validStringHandler}
        />
        {!isCorrect && <Alert>비밀번호를 확인해주세요.</Alert>}
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="checkSignupPwd">Check Password</Label>
        <Input
          id="checkSignupPwd"
          value={samePassword}
          onChange={(e) => setSamePassword(e.currentTarget.value)}
          password
          onBlur={() => setIsSamePassword(password === samePassword)}
        />
        {!isSamePassword && <Alert>비밀번호가 다릅니다.</Alert>}
      </LabelInputContainer>
      <Button onClick={signupHandler}>가입</Button>
    </form>
  );
};

export default SignupForm;
