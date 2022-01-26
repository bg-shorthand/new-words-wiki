import Heading from '@atoms/heading/Heading';
import Content from '@containers/content/Content';
import MainLayout from '@templates/mainLayout/MainLayout';
import { Post } from 'const/types';

interface CommunityProps {
  posts: Post[];
  allLength: number;
}

const Community = ({ posts, allLength }: CommunityProps) => {
  return (
    <MainLayout>
      <Content>
        <Heading level={1}>커뮤니티</Heading>
        <ul>
          {posts.map((post) => {
            return <li key={post._id}>{post.title + ' / ' + post.number}</li>;
          })}
        </ul>
      </Content>
    </MainLayout>
  );
};

export default Community;
