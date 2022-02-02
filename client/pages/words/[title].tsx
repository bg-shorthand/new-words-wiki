import Word from '@components/pages/Word';
import { wordApi } from 'api/word';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { title } = context.params as { title: string };
  const { data } = await wordApi.get(title);

  if (data.success) {
    return {
      props: {
        data: data.data,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/words/notFound/' + title,
        permanent: false,
      },
    };
  }
};

const WordPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{data.title} | 신조어 위키</title>
        <meta name="description" content={data.definition} />
      </Head>
      <Word data={data} />
    </>
  );
};

export default WordPage;
