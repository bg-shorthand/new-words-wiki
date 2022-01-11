import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Timer from '@molecules/timer/Timer';
import LabelInput from '@molecules/labelInput/LabelInput';
import useSetEmailAuthKey from 'hooks/useSetEmailAuthKey';
import useCheckAuthKey from 'hooks/useCheckAuthKey';
import useValidString from 'hooks/useValidString';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './EmailAuthForm.module.scss';

interface EmailAuthFormProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setIsComplete?: Dispatch<SetStateAction<boolean>>;
}

const EmailAuthForm = ({ email, setEmail, setIsComplete }: EmailAuthFormProps) => {
  const [authKey, setAuthKey] = useState('');
  const [isTimeout, setIsTimeout] = useState(false);
  const [isAfterSetAuthKeyBeforeTimeout, setIsAfterSetAuthKeyBeforeTimeout] = useState(false);

  const { isCorrect, validStringHandler } = useValidString('email');
  const { isUniqueEmail, liveTime, setEmailAuthKey } = useSetEmailAuthKey();
  const { isAuth, checkAuthKey } = useCheckAuthKey();

  useEffect(() => {
    if (setIsComplete) setIsComplete(isAuth);
  }, [isAuth]);
  useEffect(() => {
    setIsAfterSetAuthKeyBeforeTimeout(!!liveTime && !isTimeout);
  }, [liveTime, isTimeout]);

  return (
    <form className={style.container}>
      <LabelInput
        id="email"
        label="이메일"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        onBlur={validStringHandler}
        disabled={isAfterSetAuthKeyBeforeTimeout}
        validations={[
          { isAlert: !isUniqueEmail, alert: '이미 등록된 이메일입니다.' },
          { isAlert: !isCorrect, alert: '이메일 형식을 확인해주세요.' },
        ]}
      />
      <Button
        onClick={() => {
          setEmailAuthKey(email);
          setIsTimeout(false);
        }}
        disabled={isAfterSetAuthKeyBeforeTimeout}
        size="content"
      >
        인증 번호 받기
      </Button>
      {isAfterSetAuthKeyBeforeTimeout && (
        <Alert>
          {email}로 인증 번호가 발송되었습니다. 유효 시간:{' '}
          {<Timer time={liveTime} callback={() => setIsTimeout(true)} />}
        </Alert>
      )}
      <LabelInput
        id="authKey"
        label="인증 번호"
        value={authKey}
        onChange={(e) => setAuthKey(e.currentTarget.value)}
        disabled={isTimeout}
        validations={[
          { isAlert: isTimeout, alert: '유효 시간이 만료되었습니다. 인증 번호를 다시 받아주세요.' },
        ]}
      />
      <Button onClick={(e) => checkAuthKey(email, authKey)} size="s">
        인증
      </Button>
      {isAuth && <Alert>인증 되었습니다.</Alert>}
    </form>
  );
};

export default EmailAuthForm;
