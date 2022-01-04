import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import InputText from '@atoms/inputText/InputText';
import Label from '@atoms/label/Label';
import LabelInputBox from '@containers/labelInputContainer/LabelInputContainer';
import { DefaultProps } from 'const/types';
import useValidString from 'hooks/useValidString';
import { Dispatch, SetStateAction, useState } from 'react';

interface EmailAuthFormProps extends DefaultProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setStage?: Dispatch<SetStateAction<number>>;
}

const EmailAuthForm = ({ email, setEmail, setStage }: EmailAuthFormProps) => {
  const [authKey, setAuthKey] = useState('');
  const [isUniqueEmail, setisUniqueEmail] = useState(true);

  const { isCorrect: isCorrectEmail, validStringHandler: validEmailHandler } =
    useValidString('email');

  return (
    <form>
      <LabelInputBox>
        <Label htmlFor="signupId">ID</Label>
        <InputText
          id="signupId"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          onBlur={validEmailHandler}
        />
        {!isCorrectEmail && <Alert>이메일 형식을 확인해주세요.</Alert>}
        {!isUniqueEmail && <Alert>이미 등록된 이메일입니다.</Alert>}
      </LabelInputBox>
      <Button>인증 번호 받기</Button>
      <Alert>{email} 주소로 인증 번호가 발송되었습니다.</Alert>
      <LabelInputBox>
        <Label htmlFor="authKey">인증 번호</Label>
        <InputText
          id="authKey"
          value={authKey}
          onChange={(e) => setAuthKey(e.currentTarget.value)}
        />
      </LabelInputBox>
      <Button>이메일 인증</Button>
      {setStage && <Button onClick={() => setStage((pre) => (pre += 1))}>다음</Button>}
    </form>
  );
};

export default EmailAuthForm;
