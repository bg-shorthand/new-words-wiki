import Button from '@atoms/button/Button';
import Input from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import style from './SigninForm.module.scss';

const SigninForm = () => {
  return (
    <form className={style.container}>
      <Label htmlFor="signinId">ID</Label>
      <Input id="signinId" />
      <Label htmlFor="signinPwd">Password</Label>
      <Input id="signinPwd" />
      <Button>로그인</Button>
    </form>
  );
};

export default SigninForm;
