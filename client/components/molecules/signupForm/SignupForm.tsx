import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import LabelInputBox from '@containers/labelInput/LabelInput';
import style from './SignupForm.module.scss';

const SignupForm = () => {
  return (
    <form className={style.container}>
      <LabelInputBox locateLabel="top">
        <Label htmlFor="signupId">ID</Label>
        <InputText id="signupId" />
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="signupPwd">Password</Label>
        <InputText id="signupPwd" />
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="checkSignupPwd">Check Password</Label>
        <InputText id="checkSignupPwd" />
      </LabelInputBox>
      <Button>회원 가입</Button>
    </form>
  );
};

export default SignupForm;
