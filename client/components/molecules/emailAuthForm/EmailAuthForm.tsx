import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Timer from '@molecules/timer/Timer';
import LabelInput from '@molecules/labelInput/LabelInput';
import useSetEmailAuthKey from 'hooks/useSetEmailAuthKey';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './EmailAuthForm.module.scss';
import checkAuthKey from 'modules/checkAuthKey';

interface EmailAuthFormProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setStage: Dispatch<SetStateAction<number>>;
}

const EmailAuthForm = ({ email, setEmail, setStage }: EmailAuthFormProps) => {
  const [authKey, setAuthKey] = useState('');
  const [wrongAuthKey, setWrongAuthKey] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [isAfterSetAuthKeyBeforeTimeout, setIsAfterSetAuthKeyBeforeTimeout] = useState(false);

  const { isUniqueEmail, isCorrect, liveTime, setEmailAuthKey } = useSetEmailAuthKey();

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
        disabled={isAfterSetAuthKeyBeforeTimeout}
        validations={[
          { isAlert: !isUniqueEmail, alert: '이미 등록된 이메일입니다.' },
          { isAlert: !isCorrect, alert: '이메일 형식을 확인해주세요.' },
        ]}
      />
      <Button
        onClick={async () => {
          const res = await setEmailAuthKey(email);
          if (res) setIsTimeout(false);
        }}
        disabled={isAfterSetAuthKeyBeforeTimeout}
        size="content"
      >
        인증 번호 받기
      </Button>
      {isAfterSetAuthKeyBeforeTimeout && (
        <Alert>
          위 메일로 인증 번호가 발송되었습니다. 유효 시간:{' '}
          {<Timer time={liveTime} callback={() => setIsTimeout(true)} />}
        </Alert>
      )}
      <LabelInput
        id="authKey"
        label="인증 번호"
        value={authKey}
        onChange={(e) => setAuthKey(e.currentTarget.value)}
        disabled={!isAfterSetAuthKeyBeforeTimeout}
        validations={[
          { isAlert: isTimeout, alert: '유효 시간이 만료되었습니다. 인증 번호를 다시 받아주세요.' },
          { isAlert: wrongAuthKey, alert: '인증 번호가 다릅니다.' },
        ]}
      />
      <Button
        onClick={async () => {
          const res = await checkAuthKey(email, authKey);
          if (res) setStage((pre) => (pre += 1));
          else setWrongAuthKey(true);
        }}
        size="s"
        disabled={!isAfterSetAuthKeyBeforeTimeout}
      >
        인증
      </Button>
    </form>
  );
};

export default EmailAuthForm;
