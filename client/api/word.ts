import axios from 'axios';
import { Word } from 'const/types';

const url = process.env.NEXT_PUBLIC_DB_URL + '/word';

const wordApi = {
  async post(newWord: Word, access: string, refresh: string) {
    return await axios.post(url, newWord, {
      headers: {
        access,
        refresh,
      },
    });
  },
};

export { wordApi };
