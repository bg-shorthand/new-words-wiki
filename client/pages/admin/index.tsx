import isSignin from 'modules/isSignin';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = isSignin();
    if (!user || !user.admin) router.replace('/');
  }, []);

  return <h1>Here is Admin Page</h1>;
};

export default AdminPage;
