import Heading from '@atoms/heading/Heading';
import Content from '@containers/content/Content';
import Board from '@molecules/board/Board';
import Pagination from '@molecules/pagination/Pagination';
import MainLayout from '@templates/mainLayout/MainLayout';
import { Posts } from 'const/types';
import { useRouter } from 'next/router';

interface CommunityProps {
  posts: Posts[];
  allLength: number;
}

const Community = ({ posts, allLength }: CommunityProps) => {
  const router = useRouter();
  const { page } = router.query as { page: string };

  return (
    <MainLayout>
      <Content fitContent>
        <Heading level={1}>커뮤니티</Heading>
      </Content>
      <Content>
        <Board posts={posts} />
      </Content>
      <Content>
        <Pagination path="/community" curPage={+page} allLength={allLength} />
      </Content>
    </MainLayout>
  );
};

export default Community;
