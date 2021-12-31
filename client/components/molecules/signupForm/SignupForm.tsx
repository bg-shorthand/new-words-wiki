import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';

const SignupForm = () => {
  return (
    <form>
      <Label htmlFor="signupId">ID</Label>
      <InputText id="signupId" />
      <Label htmlFor="signupPwd">Password</Label>
      <InputText id="signupPwd" />
      <Label htmlFor="checkSignupPwd">Check Password</Label>
      <InputText id="checkSignupPwd" />
      <Button>회원 가입</Button>
    </form>
  );
};

export default SignupForm;
