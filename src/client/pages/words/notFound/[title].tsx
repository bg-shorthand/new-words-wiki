import NotFound from '@components/pages/NotFound';
import { wordApi } from 'api/word';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { title } = context.params as { title: string };
  const { data } = await wordApi.getRelatedTitles(title);

  return {
    props: {
      title,
      relatedTitles: data.success ? data.data : null,
    },
  };
};

const NotFoundPage = ({
  title,
  relatedTitles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <NotFound title={title} relatedTitles={relatedTitles} />;
};

export default NotFoundPage;
