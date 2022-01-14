import axios from 'axios';
import { NewUser } from 'const/types';

const url = process.env.NEXT_PUBLIC_DB_URL + '/user';

const userApi = {
  async signup(newUser: NewUser) {
    return await axios.post(url, newUser);
  },
  async signin(email: string, password: string) {
    return await axios.get(url + '/signin/?email=' + email + '&password=' + password);
  },
  async getMyInfo(access: string, refresh: string) {
    const res = await axios.get(url + '/myInfo', {
      headers: {
        access,
        refresh,
      },
    });

    if (res.data.newAccess) {
      return await axios.get(url + '/myInfo', {
        headers: {
          access: res.data.newAccess,
          refresh,
        },
      });
    } else return res;
  },
  async findUserByEmail(email: String) {
    return await axios.get(url + '/email/' + email);
  },
};

export default userApi;
