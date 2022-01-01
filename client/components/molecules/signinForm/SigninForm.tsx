import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import LabelInputBox from '@containers/labelInputContainer/LabelInputContainer';
import { useState } from 'react';
import style from './SigninForm.module.scss';

const SigninForm = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <form className={style.container}>
      <LabelInputBox>
        <Label htmlFor="signinId">ID</Label>
        <InputText id="signinId" value={id} onChange={(e) => setId(e.currentTarget.value)} />
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="signinPwd">Password</Label>
        <InputText id="signinPwd" value={pwd} onChange={(e) => setPwd(e.currentTarget.value)} />
      </LabelInputBox>
      <Button>로그인</Button>
    </form>
  );
};

export default SigninForm;
