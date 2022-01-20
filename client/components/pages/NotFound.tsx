import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import MainLayout from '@templates/mainLayout/MainLayout';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <Content>
        <Heading level={2} textAlign="center">
          <i className="far fa-sad-tear"></i>등록된 신조어가 없습니다.
        </Heading>
        <Paragraph textAlign="center">새로운 신조어를 등록하시겠습니까?</Paragraph>
        <Button onClick={() => router.push('/write')}>등록하기</Button>
      </Content>
    </MainLayout>
  );
};

export default NotFound;
