import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Community from '@components/pages/Community';
import Content from '@containers/content/Content';
import MainLayout from '@templates/mainLayout/MainLayout';
import communityApi from 'api/community';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.params as { page: string };
  const { data } = await communityApi.get(+page);
  const { posts, allLength } = data.data;

  return {
    props: {
      posts,
      allLength,
    },
  };
};

const CommunityPage = ({
  posts,
  allLength,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  return posts.length ? (
    <Community posts={posts} allLength={allLength} />
  ) : (
    <MainLayout>
      <Content fitContent alignSelf="center">
        <Heading level={1}>게시물이 없습니다.</Heading>
      </Content>
      <Content fitContent alignSelf="center">
        <Button size="s" onClick={() => router.push('/community/writePost')}>
          쓰기
        </Button>
      </Content>
    </MainLayout>
  );
};

export default CommunityPage;
