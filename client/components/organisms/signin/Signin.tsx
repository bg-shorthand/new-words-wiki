import Heading from '@atoms/heading/Heading';
import LabelInput from '@molecules/labelInput/LabelInput';
import SigninForm from '@molecules/signinForm/SigninForm';
import style from './Signin.module.scss';

const Signin = () => {
  return (
    <>
      <Heading level={1}>로그인</Heading>
      <SigninForm />
      <div className={style.footer}>
        <LabelInput id="keepSignin" label="로그인 유지" type="checkbox" />
      </div>
    </>
  );
};

export default Signin;
