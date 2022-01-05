import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import LabelInputBox from '@containers/labelInputContainer/LabelInputContainer';
import { DefaultProps } from 'const/types';
import useValidString from 'hooks/useValidString';
import { useState } from 'react';
import style from './SignupForm.module.scss';

interface SignupFormProps extends DefaultProps {
  email: string;
}

const SignupForm = ({ email }: SignupFormProps) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [samePassword, setSamePassword] = useState('');
  const [isSamePassword, setIsSamePassword] = useState(false);
  const { isCorrect, validStringHandler } = useValidString('password');

  return (
    <form className={style.container}>
      <LabelInputBox>
        <Label htmlFor="signupEmail">Email</Label>
        <InputText id="signupEmail" value={email} disabled />
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="signupNickname">Nickname</Label>
        <InputText
          id="signupNickname"
          value={nickname}
          onChange={(e) => setNickname(e.currentTarget.value)}
        />
        <Alert>이미 등록된 닉네임입니다.</Alert>
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="signupPwd">Password</Label>
        <InputText
          id="signupPwd"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          password
          onBlur={validStringHandler}
        />
        {!isCorrect && <Alert>비밀번호를 확인해주세요.</Alert>}
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="checkSignupPwd">Check Password</Label>
        <InputText
          id="checkSignupPwd"
          value={samePassword}
          onChange={(e) => setSamePassword(e.currentTarget.value)}
          password
          onBlur={() => setIsSamePassword(password === samePassword)}
        />
        {!isSamePassword && <Alert>비밀번호가 다릅니다.</Alert>}
      </LabelInputBox>
      <Button>가입</Button>
    </form>
  );
};

export default SignupForm;
