import Heading from '@atoms/heading/Heading';
import Content from '@containers/content/Content';
import Pagination from '@molecules/pagination/Pagination';
import MainLayout from '@templates/mainLayout/MainLayout';
import { Post } from 'const/types';
import { useRouter } from 'next/router';

interface CommunityProps {
  posts: Post[];
  allLength: number;
}

const Community = ({ posts, allLength }: CommunityProps) => {
  const router = useRouter();
  const { page } = router.query as { page: string };

  return (
    <MainLayout>
      <Content>
        <Heading level={1}>커뮤니티</Heading>
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title + ' / ' + post.number}</li>;
          })}
        </ul>
      </Content>
      <Content>
        <Pagination path="/community" curPage={+page} allLength={allLength} />
      </Content>
    </MainLayout>
  );
};

export default Community;
