import axios from 'axios';
import { NewUser } from 'const/types';

const url = process.env.NEXT_PUBLIC_DB_URL || '';

const userApi = {
  async post(newUser: NewUser) {
    return await axios.post(url + '/user', newUser);
  },
};

export default userApi;
