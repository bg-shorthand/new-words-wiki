import Community from '@components/pages/Community';
import communityApi from 'api/community';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.params as { page: string };
  const { data } = await communityApi.get(+page);
  const { posts, allLength } = data.data;

  if (posts.length) {
    return {
      props: {
        posts,
        allLength,
      },
    };
  } else
    return {
      redirect: {
        destination: '/community/1',
        permanent: false,
      },
    };
};

const CommunityPage = ({
  posts,
  allLength,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Community posts={posts} allLength={allLength} />;
};

export default CommunityPage;
