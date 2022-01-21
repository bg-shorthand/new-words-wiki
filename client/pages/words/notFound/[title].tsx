import NotFound from '@components/pages/NotFound';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { title } = context.params as { title: string };

  return {
    props: {
      title,
    },
  };
};

const NotFoundPage = ({ title }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <NotFound title={title} />;
};

export default NotFoundPage;
