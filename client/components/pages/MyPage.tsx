import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Content from '@containers/content/Content';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import MainLayout from '@templates/mainLayout/MainLayout';
import calcNextTier from 'modules/calcNextTier';
import generateTierImage from 'modules/generateTierImage';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const MyPage = () => {
  const [nextScore, setNextScore] = useState(0);

  const userInfo = useRecoilValue(isSigninState);
  const setDialogs = useSetRecoilState(dialogsState);

  useEffect(() => {
    setNextScore(calcNextTier(userInfo?.score || 0));
  }, [userInfo?.score]);

  return (
    <MainLayout>
      <Content fitContent flexFlow="row">
        <Heading level={1}>내 정보</Heading>
        <Button
          size="content"
          onClick={() => setDialogs((pre) => ({ ...pre, findPassword: true }))}
        >
          비밀번호 변경
        </Button>
      </Content>
      <Content flexFlow="row">
        <Heading level={2}>닉네임</Heading>
        <span>{userInfo?.nickname}</span>
        <Button size="content">수정</Button>
      </Content>
      <Content flexFlow="row">
        <Heading level={2}>등급</Heading>
        <div>
          <Image src={generateTierImage(userInfo?.score || 0)} width={18} height={18} />
        </div>
        <span>
          ({userInfo?.score}점 / 다음 등급(
          {
            <Image
              src={generateTierImage((userInfo?.score || 0) * 2 ? (userInfo?.score || 0) * 2 : 2)}
              width={18}
              height={18}
            />
          }
          )까지 {nextScore}점 필요)
        </span>
      </Content>
    </MainLayout>
  );
};

export default MyPage;
