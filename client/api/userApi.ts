import axios from 'axios';
import { NewUser } from 'const/types';

const url = process.env.NEXT_PUBLIC_DB_URL + '/user';

const userApi = {
  async signin(email: string, password: string) {
    return await axios.get(url + '/signin/?email=' + email + '&password=' + password);
  },
  async get(email: String) {
    return await axios.get(url + '/email/' + email);
  },
  async signup(newUser: NewUser) {
    return await axios.post(url, newUser);
  },
};

export default userApi;
