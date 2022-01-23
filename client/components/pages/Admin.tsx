import Button from '@atoms/button/Button';
import Content from '@containers/content/Content';
import useOpenAlertDialog from '@hooks/useOpenAlertDialog';
import { getServerSideProps } from '@pages/admin';
import { dialogsState } from '@recoil/modalDialog';
import MainLayout from '@templates/mainLayout/MainLayout';
import reportApi from 'api/report';
import { wordApi } from 'api/word';
import isSignin from 'modules/isSignin';
import setToken from 'modules/setToken';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

const Admin = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [list, setList] = useState<{ _id: string; title: string }[]>(data);
  const setDialogs = useSetRecoilState(dialogsState);
  const openAlertDialog = useOpenAlertDialog();
  const router = useRouter();

  useEffect(() => {
    const user = isSignin();
    if (!user || !user.admin) router.replace('/');
  }, []);

  return (
    <MainLayout>
      <ul>
        {list.map(({ _id, title }: { _id: string; title: string }) => {
          return (
            <li key={_id}>
              <Content>
                {title}
                <Button
                  size="s"
                  onClick={async () => {
                    const { access, refresh } = setToken.get();
                    if (!access || !refresh)
                      return setDialogs((pre) => ({ ...pre, needSignin: true }));
                    const { data } = await reportApi.delete(title, access, refresh);
                    if (data.success) setList((pre) => pre.filter((item) => item.title !== title));
                    else openAlertDialog('실패');
                  }}
                >
                  무시
                </Button>
                <Button
                  size="s"
                  onClick={async () => {
                    const { access, refresh } = setToken.get();
                    if (!access || !refresh)
                      return setDialogs((pre) => ({ ...pre, needSignin: true }));
                    await wordApi.delete(title, access, refresh);
                    const { data } = await reportApi.delete(title, access, refresh);
                    if (data.success) setList((pre) => pre.filter((item) => item.title !== title));
                    else openAlertDialog('실패');
                  }}
                >
                  삭제
                </Button>
              </Content>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
};

export default Admin;
