import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import { getServerSideProps } from '@pages/words/notFound/[title]';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import { wordState } from '@recoil/word';
import MainLayout from '@templates/mainLayout/MainLayout';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const NotFound = ({ title }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isSignin = useRecoilValue(isSigninState);
  const setDialogs = useSetRecoilState(dialogsState);
  const setWord = useSetRecoilState(wordState);

  const router = useRouter();

  return (
    <MainLayout>
      <Content>
        <Heading level={2}>
          {title}
          <i aria-hidden className="far fa-sad-tear"></i>
        </Heading>
        <Paragraph textAlign="center">
          등록된 신조어가 없습니다. <br />
          등록하시겠습니까?
        </Paragraph>
        <Button
          onClick={() => {
            if (isSignin) {
              setWord((pre) => ({ ...pre, title }));
              router.push('/write');
            } else setDialogs((pre) => ({ ...pre, needSignin: true }));
          }}
        >
          등록하기
        </Button>
      </Content>
    </MainLayout>
  );
};

export default NotFound;
