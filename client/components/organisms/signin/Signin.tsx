import Heading from '@atoms/heading/Heading';
import LabelInput from '@molecules/labelInput/LabelInput';
import SigninForm from '@molecules/signinForm/SigninForm';
import style from './Signin.module.scss';

const Signin = () => {
  return (
    <>
      <Heading level={1}>로그인</Heading>
      <SigninForm />
      <div className={style.footer}></div>
    </>
  );
};

export default Signin;
