import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import Timer from '@molecules/timer/Timer';
import LabelInputBox from '@containers/labelInputContainer/LabelInputContainer';
import { DefaultProps } from 'const/types';
import useSetEmailAuthKey from 'hooks/useSetEmailAuthKey';
import useValidString from 'hooks/useValidString';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useCheckAuthKey from 'hooks/useCheckAuthKey';

interface EmailAuthFormProps extends DefaultProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setIsComplete?: Dispatch<SetStateAction<boolean>>;
}

const EmailAuthForm = ({ email, setEmail, setIsComplete }: EmailAuthFormProps) => {
  const [authKey, setAuthKey] = useState('');

  const { isCorrect, validStringHandler } = useValidString('email');
  const { isUniqueEmail, liveTime, setEmailAuthKey } = useSetEmailAuthKey();
  const { isAuth, checkAuthKey } = useCheckAuthKey();

  useEffect(() => {
    if (setIsComplete) setIsComplete(isAuth);
  }, [isAuth]);

  return (
    <form>
      <LabelInputBox>
        <Label htmlFor="signupId">이메일</Label>
        <InputText
          id="signupId"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          onBlur={validStringHandler}
        />
        {!isCorrect && <Alert>이메일 형식을 확인해주세요.</Alert>}
        {!isUniqueEmail && <Alert>이미 등록된 이메일입니다.</Alert>}
      </LabelInputBox>
      <Button onClick={() => setEmailAuthKey(email)}>인증 번호 받기</Button>
      {liveTime ? (
        <Alert>
          {email}로 인증 번호가 발송되었습니다. 유효 시간: {<Timer time={liveTime} />}
        </Alert>
      ) : null}
      <LabelInputBox>
        <Label htmlFor="authKey">인증 번호</Label>
        <InputText
          id="authKey"
          value={authKey}
          onChange={(e) => setAuthKey(e.currentTarget.value)}
        />
      </LabelInputBox>
      <Button onClick={() => checkAuthKey(email, authKey)}>인증</Button>
    </form>
  );
};

export default EmailAuthForm;
