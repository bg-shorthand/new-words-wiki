import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import MainLayout from '@templates/mainLayout/MainLayout';
import Head from 'next/head';
import Link from 'next/link';

const Main = () => {
  return (
    <>
      <Head>
        <title>신조어 위키</title>
      </Head>
      <MainLayout>
        <Content fitContent alignSelf="center">
          <Heading level={1}>세종대왕님 우세요??</Heading>
        </Content>
        <Content>
          <Paragraph textAlign="center">
            신조어만 보면 급발진하는 사람들을 본다.{'\n'}자신이 모르는 말을 쓴다고 볼멘소리다.{'\n'}
            세종대왕님이 분노한다는 둥, 세종대왕님 한숨이 들린다는 둥,{'\n'}애꿎은 세종대왕님까지
            자꾸 소환한다.{'\n'}그 분들의 걱정처럼,{'\n'}언어와 문자가 신조어 때문에 파괴될까?{'\n'}
            {'\n'}언어와 문자는 그런 식으로 파괴되지 않는다.{'\n'}오히려 신조어 덕에 더
            풍요로워진다.
            {'\n'}
            {'\n'}무언가 위기를 맞을 때는 사람들이 외면해서다.{'\n'}금기시 되든, 재미가 없든,{'\n'}
            더 이상 그것을 사용하지 않을 때 위기를 맞는다.{'\n'}
            언어도 마찬가지다.{'\n'}많은 사람들이 한국어와 한글을 즐기는 지금,{'\n'}새로운 신조어가
            매일 생겨나는 이 때,{'\n'}한국어와 한글이 위기를 맞았다고 할수 있을까?
            {'\n'}
            {'\n'}다른 걱정은 타당해 보인다.{'\n'}신조어로 인한 소통의 어려움.{'\n'}그래서 신조어
            위키를 만들었다.{'\n'}모든 사람들이 편안한 마음으로 새로운 말을 접하면 좋겠다.{'\n'}
            신조어 위키가 모두에게 재밌는 곳이었으면 좋겠다.
          </Paragraph>
        </Content>
        <Content>
          <Paragraph>
            "~ 한국 젊은이들 사이에 유행하는 야민정음 같은 것도 우리 문화를 더 다채롭고 발랄하게
            해주는 고마운 현상이라고 할 만하다. 세종이 한글을 만들 때 야민정음 식의 사용을 염두에
            두었을 것 같지는 않으나, 그렇다고 해서 야민정음을 보고 꼭 분노했을 것 같지도 않다.
            ‘아니, 내가 생각지도 못했던 이런 방식으로 한글을 쓰다니. 요즘 녀석들 아이디어가 톡톡
            튀는데.’ 하며 껄껄 웃으실지도 모르겠다. ~" - 박진호 교수(국어국문학과)
            <Link href="http://www.snujn.com/news/33973">
              <a target="_blank">
                {' <'}야민정음, 발랄한 문자 놀이{'>'} 기고에서 발췌
              </a>
            </Link>
          </Paragraph>
        </Content>
      </MainLayout>
    </>
  );
};

export default Main;
