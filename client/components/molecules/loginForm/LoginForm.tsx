import Button from '@atoms/button/Button';
import Input from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import style from './LoginForm.module.scss';

const LoginForm = () => {
  return (
    <form className={style.container}>
      <Label htmlFor="loginId">ID</Label>
      <Input id="loginId" />
      <Label htmlFor="loginPwd">Password</Label>
      <Input id="loginPwd" />
      <Button>로그인</Button>
    </form>
  );
};

export default LoginForm;
