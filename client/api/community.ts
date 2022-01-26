import axios from 'axios';

const url = process.env.NEXT_PUBLIC_DB_URL + '/community';

const communityApi = {
  async get(page: number) {
    return axios.get(url + '/' + page);
  },
};

export default communityApi;
