import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import LabelInputBox from '@containers/labelInputContainer/LabelInputContainer';
import userApi from 'api/userApi';
import { NewUser } from 'const/types';
import useCheckPassword from 'hooks/useCheckPassword';
import useValidString from 'hooks/useValidString';
import { MouseEventHandler, useState } from 'react';
import style from './SignupForm.module.scss';

const SignupForm = () => {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [pwd, setPwd] = useState('');
  const [checkPwd, setCheckPwd] = useState('');

  const { isCorrect: isCorrectEmail, validStringHandler: validEmailHandler } =
    useValidString('email');
  const { isCorrect: isCorrectPwd, validStringHandler: validPwdHandler } =
    useValidString('password');
  const { isSame, checkPasswordHandler } = useCheckPassword(pwd, checkPwd);

  const signupHandler: MouseEventHandler = async (e) => {
    e.preventDefault();

    const newUser: NewUser = { email: id, nickname: nickname, password: pwd };
    const res = await userApi.post(newUser);

    console.log(res);
  };

  return (
    <form className={style.container}>
      <LabelInputBox>
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
        <Label htmlFor="signupNickname">Nickname</Label>
        <InputText
          id="signupNickname"
          value={nickname}
          onChange={(e) => setNickname(e.currentTarget.value)}
        />
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
          onBlur={checkPasswordHandler}
        />
        {!isSame && <Alert>비밀번호가 다릅니다.</Alert>}
      </LabelInputBox>
      <Button type="submit" onClick={signupHandler}>
        회원 가입
      </Button>
    </form>
  );
};

export default SignupForm;
