import Button from '@atoms/button/Button';
import Input from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';

const LoginForm = () => {
  return (
    <form>
      <Label htmlFor="loginId">ID</Label>
      <Input id="loginId" />
      <Label htmlFor="loginPwd">Password</Label>
      <Input id="loginPwd" />
      <Button>submit</Button>
    </form>
  );
};

export default LoginForm;
