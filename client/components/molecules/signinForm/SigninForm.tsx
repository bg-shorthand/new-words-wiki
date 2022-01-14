import Button from '@atoms/button/Button';
import LabelInput from '@molecules/labelInput/LabelInput';
import { dialogsState } from '@recoil/modalDialog';
import useSignin from 'hooks/useSignin';
import { useEffect, useState } from 'react';
import { useResetRecoilState } from 'recoil';
import style from './SigninForm.module.scss';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignin, setKeepSignin] = useState(false);
  const [canSignin, setCanSignin] = useState(false);

  const resetDialog = useResetRecoilState(dialogsState);

  const { errMsg, isCorrectEmail, isCorrectPassword, wrongEmail, wrongPassword, signin } =
    useSignin(email, password, keepSignin);

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
          { isAlert: wrongEmail, alert: errMsg },
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
          { isAlert: wrongPassword, alert: errMsg },
        ]}
      />
      <LabelInput
        id="keepSignin"
        label="로그인 유지"
        type="checkbox"
        checked={keepSignin}
        onChange={() => setKeepSignin((pre) => !pre)}
      />
      <Button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          const success = await signin();
          if (success) resetDialog();
        }}
        disabled={!canSignin}
      >
        로그인
      </Button>
    </form>
  );
};

export default SigninForm;
