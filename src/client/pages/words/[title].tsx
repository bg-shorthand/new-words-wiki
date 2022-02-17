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
        word: data.data.word,
        relatedTitles: data.data.relatedTitles,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/words/notFound/' + encodeURI(title),
        permanent: false,
      },
    };
  }
};

const WordPage = ({
  word,
  relatedTitles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{word.title} | 신조어 위키</title>
        <meta name="description" content={word.definition} />
      </Head>
      <Word word={word} relatedTitles={relatedTitles} />
    </>
  );
};

export default WordPage;
