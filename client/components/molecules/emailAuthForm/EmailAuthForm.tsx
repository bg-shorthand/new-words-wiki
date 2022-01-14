import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Timer from '@molecules/timer/Timer';
import LabelInput from '@molecules/labelInput/LabelInput';
import useSetEmailAuthKey from 'hooks/useSetEmailAuthKey';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './EmailAuthForm.module.scss';
import useConfirmAuthKey from 'hooks/useConfirmAuthKey';

interface EmailAuthFormProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setStage: Dispatch<SetStateAction<number>>;
}

const EmailAuthForm = ({ email, setEmail, setStage }: EmailAuthFormProps) => {
  const [authKey, setAuthKey] = useState('');
  const [isTimeout, setIsTimeout] = useState(false);
  const [isAfterSetAuthKeyBeforeTimeout, setIsAfterSetAuthKeyBeforeTimeout] = useState(false);

  const {
    errMsg: errMsgToSetAuthKey,
    isUnique,
    isCorrect,
    liveTime,
    setEmailAuthKey,
  } = useSetEmailAuthKey();
  const { errMsg: errMsgToConfirmAuthKey, wrongAuthKey, confirmAuthKey } = useConfirmAuthKey();

  useEffect(() => {
    setIsAfterSetAuthKeyBeforeTimeout(!!liveTime && !isTimeout);
  }, [liveTime, isTimeout]);

  return (
    <>
      <form className={style.container}>
        <LabelInput
          id="email"
          label="이메일"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          disabled={isAfterSetAuthKeyBeforeTimeout}
          validations={[
            { isAlert: !isUnique, alert: errMsgToSetAuthKey },
            { isAlert: !isCorrect, alert: '이메일 형식을 확인해주세요.' },
          ]}
        />
        <Button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            const res = await setEmailAuthKey(email);
            if (res) setIsTimeout(false);
          }}
          disabled={isAfterSetAuthKeyBeforeTimeout}
          size="content"
        >
          인증 번호 받기
        </Button>
      </form>
      <form className={style.container}>
        {isAfterSetAuthKeyBeforeTimeout && (
          <Alert>
            <i className="fas fa-flag-checkered"></i> 인증 번호가 발송되었습니다. 유효 시간:{' '}
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
            {
              isAlert: isTimeout,
              alert: '유효 시간이 만료되었습니다. 인증 번호를 다시 받아주세요.',
            },
            { isAlert: wrongAuthKey, alert: errMsgToConfirmAuthKey },
          ]}
        />
        <Button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            const res = await confirmAuthKey(email, authKey);
            if (res) setStage((pre) => (pre += 1));
          }}
          size="s"
          disabled={!isAfterSetAuthKeyBeforeTimeout}
        >
          인증
        </Button>
      </form>
    </>
  );
};

export default EmailAuthForm;
