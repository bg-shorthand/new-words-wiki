import Admin from '@components/pages/Admin';
import reportApi from 'api/report';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await reportApi.get();

  return {
    props: {
      data: data.data,
    },
  };
};

const AdminPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return Admin({ data });
};

export default AdminPage;
