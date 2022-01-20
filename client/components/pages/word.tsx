import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import Images from '@molecules/images/Images';
import { getServerSideProps } from '@pages/words/[title]';
import MainLayout from '@templates/mainLayout/MainLayout';
import { InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

const Word = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(data.images);
  }, []);

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
        <Heading level={3}>관련 이미지</Heading>
        {images.length ? (
          <Images images={images} setImages={setImages} />
        ) : (
          <Paragraph>아직 등록된 이미지가 없습니다.</Paragraph>
        )}
      </Content>
    </MainLayout>
  );
};

export default Word;
