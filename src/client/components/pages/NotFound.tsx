import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import RelatedTitles from '@molecules/relatedTitles/RelatedTitles';
import { getServerSideProps } from '@pages/words/notFound/[title]';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import { wordState } from '@recoil/word';
import MainLayout from '@templates/mainLayout/MainLayout';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const NotFound = ({
  title,
  relatedTitles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isSignin = useRecoilValue(isSigninState);
  const setDialogs = useSetRecoilState(dialogsState);
  const setWord = useSetRecoilState(wordState);

  const router = useRouter();

  return (
    <MainLayout>
      <Content fitContent>
        <Heading level={2}>{title}</Heading>
      </Content>
      <Content>
        <Paragraph textAlign="center">
          등록된 신조어가 없습니다. <i aria-hidden className="far fa-sad-tear"></i>
          {relatedTitles ? '\n아래 단어를 찾으셨습니까?\n\n' : null}
          {RelatedTitles(relatedTitles)}
          {relatedTitles ? '\n찾으시는 단어가 없으시면,' : null}
          {'\n'}새로운 단어를 등록해주세요!
        </Paragraph>
      </Content>
      <Content fitContent alignSelf="flex-end">
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
