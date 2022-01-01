import Alert from '@atoms/alert/Alert';
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
        <Alert>email을 확인해주세요.</Alert>
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="signupPwd">Password</Label>
        <InputText id="signupPwd" />
        <Alert>비밀번호를 확인해주세요.</Alert>
      </LabelInputBox>
      <LabelInputBox>
        <Label htmlFor="checkSignupPwd">Check Password</Label>
        <InputText id="checkSignupPwd" />
        <Alert>비밀번호가 다릅니다.</Alert>
      </LabelInputBox>
      <Button>회원 가입</Button>
    </form>
  );
};

export default SignupForm;
