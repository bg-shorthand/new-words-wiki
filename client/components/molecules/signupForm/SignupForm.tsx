import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import LabelInputBox from '@containers/labelInputContainer/LabelInputContainer';
import { DefaultProps } from 'const/types';
import useCheckPassword from 'hooks/useCheckPassword';
import useValidString from 'hooks/useValidString';
import { Dispatch, SetStateAction } from 'react';
import style from './SignupForm.module.scss';

interface SignupFormProps extends DefaultProps {
  email: string;
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  samePassword: string;
  setSamePassword: Dispatch<SetStateAction<string>>;
}

const SignupForm = ({
  email,
  nickname,
  setNickname,
  password,
  setPassword,
  samePassword,
  setSamePassword,
}: SignupFormProps) => {
  const { isCorrect: isCorrectPwd, validStringHandler: validPwdHandler } =
    useValidString('password');
  const { isSame, checkPasswordHandler } = useCheckPassword(password, samePassword);

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
          onBlur={validPwdHandler}
        />
        {!isCorrectPwd && <Alert>비밀번호를 확인해주세요.</Alert>}
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="checkSignupPwd">Check Password</Label>
        <InputText
          id="checkSignupPwd"
          value={samePassword}
          onChange={(e) => setSamePassword(e.currentTarget.value)}
          password
          onBlur={checkPasswordHandler}
        />
        {!isSame && <Alert>비밀번호가 다릅니다.</Alert>}
      </LabelInputBox>
      <Button>다음</Button>
    </form>
  );
};

export default SignupForm;
