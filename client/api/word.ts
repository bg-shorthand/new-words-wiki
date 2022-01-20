import axios from 'axios';
import { Word } from 'const/types';
import setToken from 'modules/setToken';

const url = process.env.NEXT_PUBLIC_DB_URL + '/word';

const wordApi = {
  async get(title: string) {
    return await axios.get(encodeURI(url + '?title=' + title));
  },
  async getAll() {
    return await axios.get(url + '/all');
  },
  async post(newWord: Word, access: string, refresh: string) {
    const res = await axios.post(url, newWord, {
      headers: {
        access,
        refresh,
      },
    });

    if (res.data.newAccess) {
      const { keepSignin } = setToken.get();
      setToken.set(res.data.newAccess, refresh, keepSignin);
      return await axios.post(url, newWord, {
        headers: {
          access: res.data.newAccess,
          refresh,
        },
      });
    } else return res;
  },
};

export { wordApi };
