import Heading from '@atoms/heading/Heading';
import SignupForm from '@molecules/signupForm/SignupForm';
import style from './Signup.module.scss';

const Signup = () => {
  return (
    <>
      <Heading className={style.heading}>회원 가입</Heading>
      <SignupForm />
    </>
  );
};

export default Signup;
