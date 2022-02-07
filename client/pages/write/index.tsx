import dynamic from 'next/dynamic';
import Head from 'next/head';

const Write = dynamic(() => import('@components/pages/Write'));

const WritePage = () => {
  return (
    <>
      <Head>
        <title>신조어 등록 | 신조어 위키</title>
      </Head>
      <Write />
    </>
  );
};

export default WritePage;
