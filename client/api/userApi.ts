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
  async isSignin(token: string) {
    return await axios.get(url + '/me', {
      headers: {
        token: token,
      },
    });
  },
  async get(email: String) {
    return await axios.get(url + '/email/' + email);
  },
};

export default userApi;
