import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import MainLayout from '@templates/mainLayout/MainLayout';
import Image from 'next/image';
import tierIcons from '@public/tier-icons.jpg';

const Guide = () => {
  return (
    <MainLayout>
      <Content fitContent>
        <Heading level={1}>가이드</Heading>
      </Content>
      <Content>
        <Heading level={2}>신조어 등록 및 열람</Heading>
        <Paragraph>
          <ol>
            <li>1. 신조어 확인은 로그인 없이 누구나 열람할 수 있습니다.</li>
            <li>2. 신조어 등록과 수정은 로그인 후 가능합니다.</li>
            <li>3. 신조어 등록이나 수정을 할 때, 회원 점수가 +1 됩니다.</li>
            <li>4. 신조어가 아닌 단어는 신고할 수 있습니다.</li>
            <li>5. 신고된 페이지는 운영자 확인 후 삭제됩니다.</li>
          </ol>
        </Paragraph>
      </Content>
      <Content>
        <Heading level={2}>회원 등급</Heading>
        <Paragraph>
          <ol>
            <li>1. 신조어를 등록하거나 수정하면 회원 점수가 늘어납니다.</li>
            <li>2. 닉네임 변경시 회원 점수는 초기화 됩니다.</li>
            <li>3. 점수에 따라 회원 등급 아이콘이 변합니다.</li>
            <li>4. 등급 아이콘은 아래와 같습니다.</li>
          </ol>
          <br />
          <Image src={tierIcons} alt="회원 등급 아이콘 모음"></Image>
        </Paragraph>
      </Content>
      <Content>
        <Heading level={2}>커뮤니티</Heading>
        <Paragraph>
          <ol>
            <li>1. 게시판은 회원가입 없이 사용할 수 있습니다.</li>
            <li>2. 로그인한 회원은 닉네임과 회원 등급이 표시됩니다.</li>
            <li>
              3. 로그인하지 않은 유저의 경우 닉네임이 '???'로, 회원 등급은 1단계로 표시됩니다.
            </li>
          </ol>
        </Paragraph>
      </Content>
    </MainLayout>
  );
};

export default Guide;
