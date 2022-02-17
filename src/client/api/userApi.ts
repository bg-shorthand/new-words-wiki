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
  async findUserByEmail(email: String) {
    return await axios.get(url + '/email/' + email);
  },
  async updatePassword(email: string, newPassword: string) {
    return await axios.put(url + '/updatePassword', { email, newPassword });
  },
  async getScores(nicknames: string[]) {
    return await axios.get(url + '/scores/?nicknames=' + nicknames.join(','));
  },
  async updateNickname(email: string, nickname: string) {
    return await axios.put(url + '/updateNickname', { email, nickname });
  },
};

export default userApi;
