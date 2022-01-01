import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import LabelInputBox from '@containers/labelInputContainer/LabelInputContainer';
import style from './SigninForm.module.scss';

const SigninForm = () => {
  return (
    <form className={style.container}>
      <LabelInputBox>
        <Label htmlFor="signinId">ID</Label>
        <InputText id="signinId" />
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="signinPwd">Password</Label>
        <InputText id="signinPwd" />
      </LabelInputBox>
      <Button>로그인</Button>
    </form>
  );
};

export default SigninForm;
