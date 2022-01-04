import axios from 'axios';

const url = process.env.NEXT_PUBLIC_DB_URL || '';

const emailAuthApi = {
  async get(email: string, authKey: string) {
    return await axios.get(url + '?email=' + email + '&authkey' + authKey);
  },
  async post(email: string) {
    return await axios.post(url + '/emailAuth', { email });
  },
};

export default emailAuthApi;
