import Alert from '@atoms/alert/Alert';
import Input from '@atoms/input/Input';
import Label from '@atoms/label/Label';
import LabelInputContainer from '@containers/labelInputContainer/LabelInputContainer';
import { DefaultProps } from 'const/types';
import useValidString from 'hooks/useValidString';
import { Dispatch, SetStateAction } from 'react';

interface InputEmailProps extends DefaultProps {
  email: string;
  setEmail?: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
  isUnique?: boolean;
}

const EmailInput = ({ email, setEmail, disabled, isUnique }: InputEmailProps) => {
  const { isCorrect, validStringHandler } = useValidString('email');

  return (
    <>
      <LabelInputContainer>
        <Label htmlFor="inputEmail">이메일</Label>
        <Input
          id="inputEmail"
          value={email}
          onChange={(e) => setEmail && setEmail(e.currentTarget.value)}
          onBlur={validStringHandler}
          disabled={disabled}
        />
        {!isCorrect && <Alert>이메일 형식을 확인해주세요.</Alert>}
        {!isUnique && <Alert>이미 등록된 이메일입니다.</Alert>}
      </LabelInputContainer>
    </>
  );
};

export default EmailInput;
