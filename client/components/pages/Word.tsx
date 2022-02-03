import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import Images from '@molecules/images/Images';
import Paticipants from '@molecules/paticipants/Paticipants';
import RelatedTitles from '@molecules/relatedTitles/RelatedTitles';
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

const Word = ({ word, relatedTitles }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [images, setImages] = useState<string[]>([]);
  const [RenderRelatedTitles, setRenderRelatedTitles] = useState<string[]>([]);
  const [paticipants, setPaticipants] = useState([]);

  const isSignin = useRecoilValue(isSigninState);
  const setWord = useSetRecoilState(wordState);
  const setDialogs = useSetRecoilState(dialogsState);

  const router = useRouter();

  useEffect(() => {
    const setPaticipantsAsync = async () => {
      const { paticipant } = word;
      const { data: paticipantData } = await userApi.getScores(paticipant);
      setPaticipants(paticipantData.data);
    };

    setImages(word.images);
    setPaticipantsAsync();
  }, [word]);

  useEffect(() => {
    if (relatedTitles)
      setRenderRelatedTitles(relatedTitles.filter((title: string) => title !== word.title));
  }, [relatedTitles]);

  return (
    <MainLayout>
      <Content fitContent>
        <Heading level={2}>{word.title}</Heading>
      </Content>
      <Content>
        <Heading level={3}>정의</Heading>
        <Paragraph>{word.definition}</Paragraph>
      </Content>
      <Content>
        <Heading level={3}>유례</Heading>
        <Paragraph>{word.history ? word.history : '아직 등록된 유례가 없습니다.'}</Paragraph>
      </Content>
      <Content>
        <Heading level={3}>예시</Heading>
        <Paragraph>{word.example ? word.example : '아직 등록된 예시가 없습니다.'}</Paragraph>
      </Content>
      <Content>
        <Heading level={3}>관련 이미지</Heading>
        {images.length ? (
          <Images images={images} setImages={setImages} />
        ) : (
          <Paragraph>아직 등록된 이미지가 없습니다.</Paragraph>
        )}
      </Content>
      {RenderRelatedTitles.length ? (
        <Content>
          <Heading level={3}>연관 검색어</Heading>
          {RelatedTitles(RenderRelatedTitles)}
        </Content>
      ) : null}
      <Content fitContent alignSelf="flex-end" flexFlow="row">
        <Button
          size="s"
          onClick={() => {
            if (isSignin) {
              const { title, definition, history, images, example } = word;
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
