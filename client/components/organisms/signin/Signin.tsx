import Heading from '@atoms/heading/Heading';
import SigninForm from '@molecules/signinForm/SigninForm';
import style from './Signin.module.scss';

const Signin = () => {
  return (
    <>
      <Heading level={1} className={style.heading}>
        로그인
      </Heading>
      <SigninForm />
    </>
  );
};

export default Signin;
