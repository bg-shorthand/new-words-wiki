import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import LabelInput from '@molecules/labelInput/LabelInput';
import useControlDialog from 'hooks/useControlDialog';
import useSignin from 'hooks/useSignin';
import useValidString from 'hooks/useValidString';
import { useEffect, useState } from 'react';
import style from './SigninForm.module.scss';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [canSignin, setCanSignin] = useState(false);

  const { isCorrect: isCorrectEmail, validStringHandler: validEmailHandler } =
    useValidString('email');
  const { isCorrect: isCorrectPassword, validStringHandler: validPasswordhandler } =
    useValidString('password');
  const { err, signin } = useSignin(email, password);
  const { closeDialogHandler } = useControlDialog('signin');

  useEffect(() => {
    setCanSignin(!!email && !!password && isCorrectEmail && isCorrectPassword);
  }, [email, password, isCorrectEmail, isCorrectPassword]);

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
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        onBlur={validPasswordhandler}
        validations={[
          {
            isAlert: !isCorrectPassword,
            alert: '비밀번호는 영문, 숫자, 특수문자를 포함해 8자리 이상이어야 합니다.',
          },
        ]}
      />
      <Button
        onClick={(e) => {
          signin();
          closeDialogHandler && closeDialogHandler(e);
        }}
        disabled={!canSignin}
      >
        로그인
      </Button>
      {err && <Alert>{err}</Alert>}
    </form>
  );
};

export default SigninForm;
