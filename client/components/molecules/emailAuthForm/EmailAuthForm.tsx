import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import LabelInputBox from '@containers/labelInputContainer/LabelInputContainer';
import { DefaultProps } from 'const/types';
import useSetEmailAuthKey from 'hooks/useSetEmailAuthKey';
import useValidString from 'hooks/useValidString';
import { Dispatch, SetStateAction, useState } from 'react';

interface EmailAuthFormProps extends DefaultProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

const EmailAuthForm = ({ email, setEmail }: EmailAuthFormProps) => {
  const [authKey, setAuthKey] = useState('');
  const [isUniqueEmail, setisUniqueEmail] = useState(true);

  const { isCorrect: isCorrectEmail, validStringHandler: validEmailHandler } =
    useValidString('email');
  const { liveTime, setEmailAuthKey } = useSetEmailAuthKey();

  return (
    <form>
      <LabelInputBox>
        <Label htmlFor="signupId">이메일</Label>
        <InputText
          id="signupId"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          onBlur={validEmailHandler}
        />
        {!isCorrectEmail && <Alert>이메일 형식을 확인해주세요.</Alert>}
        {!isUniqueEmail && <Alert>이미 등록된 이메일입니다.</Alert>}
      </LabelInputBox>
      <Button onClick={() => setEmailAuthKey(email)}>인증 번호 받기</Button>
      <LabelInputBox>
        <Label htmlFor="authKey">인증 번호</Label>
        <InputText
          id="authKey"
          value={authKey}
          onChange={(e) => setAuthKey(e.currentTarget.value)}
        />
      </LabelInputBox>
      <Button>인증</Button>
    </form>
  );
};

export default EmailAuthForm;