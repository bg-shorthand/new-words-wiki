import Heading from '@atoms/heading/Heading';
import Content from '@containers/content/Content';
import MainLayout from '@templates/mainLayout/MainLayout';

const MyPage = () => {
  return (
    <MainLayout>
      <Content fitContent>
        <Heading level={1}>내 정보</Heading>
      </Content>
    </MainLayout>
  );
};

export default MyPage;
