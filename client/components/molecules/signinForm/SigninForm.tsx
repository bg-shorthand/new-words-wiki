import Button from '@atoms/button/Button';
import LabelInput from '@molecules/labelInput/LabelInput';
import useControlDialog from 'hooks/useControlDialog';
import useSignin from 'hooks/useSignin';
import { useEffect, useState } from 'react';
import style from './SigninForm.module.scss';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [canSignin, setCanSignin] = useState(false);

  const { err, isCorrectEmail, isCorrectPassword, wrongEmail, wrongPassword, signin } = useSignin(
    email,
    password,
  );
  const { closeDialogHandler } = useControlDialog('signin');

  useEffect(() => {
    setCanSignin(!!email && !!password);
  }, [email, password]);

  return (
    <form className={style.container}>
      <LabelInput
        id="signinEmail"
        label="이메일"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        validations={[
          { isAlert: !isCorrectEmail, alert: '이메일 형식을 확인해주세요.' },
          { isAlert: wrongEmail, alert: err },
        ]}
      />
      <LabelInput
        id="signinPassword"
        label="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        validations={[
          {
            isAlert: !isCorrectPassword,
            alert: '비밀번호는 영문, 숫자, 특수문자를 포함해 8자리 이상이어야 합니다.',
          },
          { isAlert: wrongPassword, alert: err },
        ]}
      />
      <Button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          const success = await signin();
          if (success && closeDialogHandler) closeDialogHandler(e);
        }}
        disabled={!canSignin}
      >
        로그인
      </Button>
    </form>
  );
};

export default SigninForm;
