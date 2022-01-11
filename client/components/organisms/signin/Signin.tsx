import Heading from '@atoms/heading/Heading';
import SigninForm from '@molecules/signinForm/SigninForm';

const Signin = () => {
  return (
    <>
      <Heading level={1}>로그인</Heading>
      <SigninForm />
    </>
  );
};

export default Signin;
