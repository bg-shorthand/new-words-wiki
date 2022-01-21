import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import { getServerSideProps } from '@pages/words/notFound/[title]';
import { wordState } from '@recoil/word';
import MainLayout from '@templates/mainLayout/MainLayout';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

const NotFound = ({ title }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const setWord = useSetRecoilState(wordState);

  const router = useRouter();

  return (
    <MainLayout>
      <Content>
        <Heading level={2} textAlign="center">
          {title}
          <i aria-hidden className="far fa-sad-tear"></i>
        </Heading>
        <Paragraph textAlign="center">
          등록된 신조어가 없습니다. <br />
          등록하시겠습니까?
        </Paragraph>
        <Button
          onClick={() => {
            setWord((pre) => ({ ...pre, title }));
            router.push('/write');
          }}
        >
          등록하기
        </Button>
      </Content>
    </MainLayout>
  );
};

export default NotFound;
