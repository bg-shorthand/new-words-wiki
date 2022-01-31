import Button from '@atoms/button/Button';
import LabelInput from '@molecules/labelInput/LabelInput';
import { isSigninState } from '@recoil/isSignin';
import userApi from 'api/userApi';
import setToken from 'modules/setToken';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import jwt from 'jsonwebtoken';
import { User } from 'const/types';

interface NewNicknameFormProps {
  email: string;
  setStage: Dispatch<SetStateAction<number>>;
}

const NewNicknameForm = ({ email, setStage }: NewNicknameFormProps) => {
  const [nickname, setNickname] = useState('');
  const [isUnique, setIsUnique] = useState(true);

  const setIsSignin = useSetRecoilState(isSigninState);

  useEffect(() => {
    return () => {
      setNickname('');
      setIsUnique(true);
    };
  }, []);

  return (
    <form>
      <LabelInput
        id="newNickname"
        label="새로운 닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.currentTarget.value)}
        validations={[{ isAlert: !isUnique, alert: '이미 등록된 닉네임입니다.' }]}
      />
      <Button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          const { data } = await userApi.updateNickname(email, nickname);
          if (data.success) {
            const { accessToken, refreshToken } = data.data;
            const { keepSignin } = setToken.get();
            setToken.set(accessToken, refreshToken, keepSignin);
            const userInfo = jwt.decode(accessToken) as User;
            setIsSignin(userInfo);
            setStage((pre) => (pre += 1));
          } else setIsUnique(false);
        }}
      >
        수정
      </Button>
    </form>
  );
};

export default NewNicknameForm;
