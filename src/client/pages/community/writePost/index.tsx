import dynamic from 'next/dynamic';
import Head from 'next/head';

const WritePost = dynamic(() => import('@components/pages/WritePost'));

const WritePostPage = () => {
  return (
    <>
      <Head>커뮤니티 | 신조어 위키</Head>
      <WritePost />
    </>
  );
};

export default WritePostPage;
