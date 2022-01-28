import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Post from '@components/pages/Post';
import Content from '@containers/content/Content';
import MainLayout from '@templates/mainLayout/MainLayout';
import communityApi from 'api/community';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query as { id: string };
  const { data } = await communityApi.getPost(id);

  if (data.success) {
    return {
      props: {
        post: data.data,
      },
    };
  } else {
    return {
      props: {
        data: null,
      },
    };
  }
};

const PostPage = ({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  return post ? (
    <Post post={post} />
  ) : (
    <MainLayout>
      <Content fitContent alignSelf="center">
        <Heading level={1}>존재하지 않는 게시물입니다</Heading>
      </Content>
      <Content fitContent alignSelf="center">
        <Button onClick={() => router.back()}>돌아가기</Button>
      </Content>
    </MainLayout>
  );
};

export default PostPage;
