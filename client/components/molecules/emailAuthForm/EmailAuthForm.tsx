import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Timer from '@molecules/timer/Timer';
import EmailInput from '@molecules/emailInput/EmailInput';
import { DefaultProps } from 'const/types';
import useSetEmailAuthKey from 'hooks/useSetEmailAuthKey';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useCheckAuthKey from 'hooks/useCheckAuthKey';
import LabelInputText from '@molecules/labelInputText/LabelInputText';

interface EmailAuthFormProps extends DefaultProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setIsComplete?: Dispatch<SetStateAction<boolean>>;
}

const EmailAuthForm = ({ email, setEmail, setIsComplete }: EmailAuthFormProps) => {
  const [authKey, setAuthKey] = useState('');
  const [isTimeout, setIsTimeout] = useState(false);
  const [isAfterSetAuthKeyBeforeTimeout, setIsAfterSetAuthKeyBeforeTimeout] = useState(false);

  const { isUniqueEmail, liveTime, setEmailAuthKey } = useSetEmailAuthKey();
  const { isAuth, checkAuthKey } = useCheckAuthKey();

  useEffect(() => {
    if (setIsComplete) setIsComplete(isAuth);
  }, [isAuth]);
  useEffect(() => {
    setIsAfterSetAuthKeyBeforeTimeout(!!liveTime && !isTimeout);
  }, [liveTime, isTimeout]);

  return (
    <form>
      <EmailInput
        email={email}
        setEmail={setEmail}
        disabled={isAfterSetAuthKeyBeforeTimeout}
        isUnique={isUniqueEmail}
      />
      <Button
        onClick={() => {
          setEmailAuthKey(email);
          setIsTimeout(false);
        }}
        disabled={isAfterSetAuthKeyBeforeTimeout}
      >
        인증 번호 받기
      </Button>
      {isAfterSetAuthKeyBeforeTimeout && (
        <Alert>
          {email}로 인증 번호가 발송되었습니다. 유효 시간:{' '}
          {<Timer time={liveTime} callback={() => setIsTimeout(true)} />}
        </Alert>
      )}
      {isTimeout && <Alert>유효 시간이 만료되었습니다. 인증 번호를 다시 받아주세요.</Alert>}
      <LabelInputText
        id="authKey"
        label="인증 번호"
        value={authKey}
        onChange={(e) => setAuthKey(e.currentTarget.value)}
        disabled={isTimeout}
      />
      <Button onClick={(e) => checkAuthKey(email, authKey)}>인증</Button>
      {isAuth && <Alert>인증 되었습니다.</Alert>}
    </form>
  );
};

export default EmailAuthForm;
