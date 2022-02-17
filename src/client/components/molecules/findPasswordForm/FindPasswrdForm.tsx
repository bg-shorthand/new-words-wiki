import Button from '@atoms/button/Button';
import useValidString from '@hooks/useValidString';
import LabelInput from '@molecules/labelInput/LabelInput';
import userApi from 'api/userApi';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './FindPassword.module.scss';

interface FindPasswordFormProps {
  email: string;
  setStage: Dispatch<SetStateAction<number>>;
}

const FindPasswordForm = ({ email, setStage }: FindPasswordFormProps) => {
  const [newPassword, setNewPassword] = useState('');
  const [samePassword, setSamePassword] = useState('');
  const [isSamePassword, setIsSamePassword] = useState(true);
  const [canChangePassword, setCanChangePassword] = useState(false);

  const { isCorrect, validString } = useValidString('password');

  useEffect(() => {
    setCanChangePassword(!!newPassword && !!samePassword && isSamePassword && isCorrect);
  }, [newPassword, samePassword, isSamePassword, isCorrect]);

  return (
    <form className={style.container}>
      <LabelInput id="signupEmail" label="이메일" value={email} disabled />
      <LabelInput
        id="newPassword"
        label="새 비밀번호"
        type="password"
        value={newPassword}
        onChange={(e) => {
          validString(e.currentTarget.value);
          setNewPassword(e.currentTarget.value);
        }}
        validations={[
          {
            isAlert: !isCorrect,
            alert: '비밀번호는 영문, 숫자, 특수문자를 포함해 8자리 이상이어야 합니다.',
          },
        ]}
      />
      <LabelInput
        id="checkNewPassword"
        label="이메일 확인"
        value={samePassword}
        onChange={(e) => {
          setSamePassword(e.currentTarget.value);
          setIsSamePassword(newPassword === e.currentTarget.value);
        }}
        type="password"
        validations={[{ isAlert: !isSamePassword, alert: '비밀번호가 다릅니다.' }]}
      />
      <Button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          const { data } = await userApi.updatePassword(email, newPassword);
          if (data.success) setStage((pre) => (pre += 1));
        }}
        disabled={!canChangePassword}
      >
        등록
      </Button>
    </form>
  );
};

export default FindPasswordForm;
