import Word from '@components/pages/Word';
import { wordApi } from 'api/word';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

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
  return <Word data={data} />;
};

export default WordPage;
