import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import MainLayout from '@templates/mainLayout/MainLayout';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <Content>
        <Heading level={2} textAlign="center">
          등록된 신조어가 없습니다.
        </Heading>
        <Paragraph textAlign="center">새로운 신조어를 등록하시겠습니까?</Paragraph>
        <Button>등록하기</Button>
      </Content>
    </MainLayout>
  );
};

export default NotFoundPage;
