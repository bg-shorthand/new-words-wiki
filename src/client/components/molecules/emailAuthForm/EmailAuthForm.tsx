import Button from '@atoms/button/Button';
import Timer from '@molecules/timer/Timer';
import LabelInput from '@molecules/labelInput/LabelInput';
import useSetEmailAuthKey from '@hooks/useSetEmailAuthKey';
import useConfirmAuthKey from '@hooks/useConfirmAuthKey';
import useValidString from '@hooks/useValidString';
import useFindUser from '@hooks/useFindUser';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './EmailAuthForm.module.scss';

interface EmailAuthFormProps {
  email: string;
  setEmail?: Dispatch<SetStateAction<string>>;
  setStage: Dispatch<SetStateAction<number>>;
  mustRegist: boolean;
}

const EmailAuthForm = ({ email, setEmail, setStage, mustRegist }: EmailAuthFormProps) => {
  const [authKey, setAuthKey] = useState('');
  const [isTimeout, setIsTimeout] = useState(false);
  const [isAfterSetAuthKeyBeforeTimeout, setIsAfterSetAuthKeyBeforeTimeout] = useState(false);

  const { isCorrect, validString } = useValidString('email');
  const { errMsg: errMsgToSetAuthKey, isUnique, findUser } = useFindUser();
  const { liveTime, setEmailAuthKey } = useSetEmailAuthKey();
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
          onChange={(e) => setEmail && setEmail(e.currentTarget.value)}
          disabled={!setEmail || isAfterSetAuthKeyBeforeTimeout}
          validations={[
            {
              isAlert: mustRegist ? isUnique : !isUnique,
              alert: mustRegist ? errMsgToSetAuthKey : '이미 등록된 이메일입니다.',
            },
            { isAlert: !isCorrect, alert: '이메일 형식을 확인해주세요.' },
          ]}
        />
        <Button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            const valid = validString(email);
            if (!valid) return;
            const isAlready = await findUser(email);
            if (mustRegist ? !isAlready : isAlready) return;
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
            {
              isAlert: isAfterSetAuthKeyBeforeTimeout,
              alert: '인증 번호가 발송되었습니다. 메일을 확인해주세요.',
            },
          ]}
        />
        {isAfterSetAuthKeyBeforeTimeout && (
          <Timer className={style.timer} time={liveTime} callback={() => setIsTimeout(true)} />
        )}
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
