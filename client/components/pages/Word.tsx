import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import Images from '@molecules/images/Images';
import Paticipants from '@molecules/paticipants/Paticipants';
import { getServerSideProps } from '@pages/words/[title]';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import { wordState } from '@recoil/word';
import MainLayout from '@templates/mainLayout/MainLayout';
import userApi from 'api/userApi';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const Word = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [images, setImages] = useState<string[]>([]);
  const [paticipants, setPaticipants] = useState([]);

  const isSignin = useRecoilValue(isSigninState);
  const setWord = useSetRecoilState(wordState);
  const setDialogs = useSetRecoilState(dialogsState);

  const router = useRouter();

  useEffect(() => {
    const setPaticipantsAsync = async () => {
      const { paticipant } = data;
      const { data: paticipantData } = await userApi.getScores(paticipant);
      setPaticipants(paticipantData.data);
    };

    setImages(data.images);
    setPaticipantsAsync();
  }, [data]);

  return (
    <MainLayout>
      <Content fitContent>
        <Heading level={2}>{data.title}</Heading>
      </Content>
      <Content>
        <Heading level={3}>정의</Heading>
        <Paragraph>{data.definition}</Paragraph>
      </Content>
      <Content>
        <Heading level={3}>유례</Heading>
        <Paragraph>{data.history ? data.history : '아직 등록된 유례가 없습니다.'}</Paragraph>
      </Content>
      <Content>
        <Heading level={3}>예시</Heading>
        <Paragraph>{data.example ? data.example : '아직 등록된 예시가 없습니다.'}</Paragraph>
      </Content>
      <Content>
        <Heading level={3}>관련 이미지</Heading>
        {images.length ? (
          <Images images={images} setImages={setImages} />
        ) : (
          <Paragraph>아직 등록된 이미지가 없습니다.</Paragraph>
        )}
      </Content>
      <Content fitContent alignSelf="flex-end" flexFlow="row">
        <Button
          size="s"
          onClick={() => {
            if (isSignin) {
              const { title, definition, history, images, example } = data;
              setWord({ title, definition, history, example, images });
              router.push('/write');
            } else setDialogs((pre) => ({ ...pre, needSignin: true }));
          }}
        >
          수정
        </Button>
        <Button
          size="s"
          onClick={() => {
            if (isSignin) setDialogs((pre) => ({ ...pre, report: true }));
            else setDialogs((pre) => ({ ...pre, needSignin: true }));
          }}
        >
          신고
        </Button>
      </Content>
      <Paticipants paticipants={paticipants} />
    </MainLayout>
  );
};

export default Word;
