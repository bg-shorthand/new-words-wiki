import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import SigninForm from '@molecules/signinForm/SigninForm';
import { dialogsState } from '@recoil/modalDialog';
import { useSetRecoilState } from 'recoil';
import style from './Signin.module.scss';

const Signin = () => {
  const setDialogs = useSetRecoilState(dialogsState);

  return (
    <>
      <Heading level={1}>로그인</Heading>
      <SigninForm />
      <div className={style.footer}>
        <Button
          size="s"
          onClick={() => setDialogs((pre) => ({ ...pre, signin: false, signup: true }))}
        >
          회원가입
        </Button>
        <Button size="content">비밀번호 찾기</Button>
      </div>
    </>
  );
};

export default Signin;
