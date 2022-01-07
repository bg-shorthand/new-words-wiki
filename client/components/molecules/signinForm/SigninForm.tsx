import Button from '@atoms/button/Button';
import LabelInput from '@molecules/labelInput/LabelInput';
import useValidString from 'hooks/useValidString';
import { useState } from 'react';
import style from './SigninForm.module.scss';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [passwrod, setPassword] = useState('');

  const { isCorrect: isCorrectEmail, validStringHandler: validEmailHandler } =
    useValidString('email');
  const { isCorrect: isCorrectPassword, validStringHandler: validPasswordhandler } =
    useValidString('password');

  return (
    <form className={style.container}>
      <LabelInput
        id="signinEmail"
        label="이메일"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        onBlur={validEmailHandler}
        validations={[{ isAlert: !isCorrectEmail, alert: '이메일 형식을 확인해주세요.' }]}
      />
      <LabelInput
        id="signinPassword"
        label="비밀번호"
        value={passwrod}
        onChange={(e) => setPassword(e.currentTarget.value)}
        onBlur={validPasswordhandler}
        validations={[
          {
            isAlert: !isCorrectPassword,
            alert: '비밀번호는 영문, 숫자, 특수문자를 포함해 8자리 이상이어야 합니다.',
          },
        ]}
      />
      <Button>로그인</Button>
    </form>
  );
};

export default SigninForm;
