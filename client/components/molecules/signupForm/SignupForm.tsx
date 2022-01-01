import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import LabelInputBox from '@containers/labelInputContainer/LabelInputContainer';
import useValidString from 'hooks/useValidString';
import { useState } from 'react';
import style from './SignupForm.module.scss';

const SignupForm = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [checkPwd, setCheckPwd] = useState('');

  const { isCorrect: isCorrectEmail, validStringHandler: validEmailHandler } =
    useValidString('email');
  const { isCorrect: isCorrectPwd, validStringHandler: validPwdHandler } =
    useValidString('password');

  return (
    <form className={style.container}>
      <LabelInputBox locateLabel="top">
        <Label htmlFor="signupId">ID</Label>
        <InputText
          id="signupId"
          value={id}
          onChange={(e) => setId(e.currentTarget.value)}
          onBlur={validEmailHandler}
        />
        {!isCorrectEmail && <Alert>email을 확인해주세요.</Alert>}
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="signupPwd">Password</Label>
        <InputText
          id="signupPwd"
          value={pwd}
          onChange={(e) => setPwd(e.currentTarget.value)}
          password
          onBlur={validPwdHandler}
        />
        {!isCorrectPwd && <Alert>비밀번호를 확인해주세요.</Alert>}
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="checkSignupPwd">Check Password</Label>
        <InputText
          id="checkSignupPwd"
          value={checkPwd}
          onChange={(e) => setCheckPwd(e.currentTarget.value)}
          password
        />
        <Alert>비밀번호가 다릅니다.</Alert>
      </LabelInputBox>
      <Button>회원 가입</Button>
    </form>
  );
};

export default SignupForm;
