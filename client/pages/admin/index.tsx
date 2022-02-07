import reportApi from 'api/report';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';

const Admin = dynamic(() => import('@components/pages/Admin'));

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await reportApi.get();

  return {
    props: {
      data: data.data,
    },
  };
};

const AdminPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Admin data={data} />;
};

export default AdminPage;
