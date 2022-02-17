import axios from 'axios';
import setToken from 'modules/setToken';

const url = process.env.NEXT_PUBLIC_DB_URL + '/report';

const reportApi = {
  async get() {
    return await axios.get(url);
  },
  async post(title: string, access: string, refresh: string) {
    const res = await axios.post(
      url,
      { title },
      {
        headers: {
          access,
          refresh,
        },
      },
    );

    if (res.data.newAccess) {
      const { keepSignin } = setToken.get();
      setToken.set(res.data.newAccess, refresh, keepSignin);
      return await axios.put(
        url,
        { title },
        {
          headers: {
            access: res.data.newAccess,
            refresh,
          },
        },
      );
    } else return res;
  },
  async delete(title: string, access: string, refresh: string) {
    const res = await axios.delete(url + '?title=' + title, {
      headers: {
        access,
        refresh,
      },
    });

    if (res.data.newAccess) {
      const { keepSignin } = setToken.get();
      setToken.set(res.data.newAccess, refresh, keepSignin);
      return await axios.put(url + '?title=' + title, {
        headers: {
          access: res.data.newAccess,
          refresh,
        },
      });
    } else return res;
  },
};

export default reportApi;
