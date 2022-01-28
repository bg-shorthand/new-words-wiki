import axios from 'axios';
import { Post } from 'const/types';

const url = process.env.NEXT_PUBLIC_DB_URL + '/community';

const communityApi = {
  async get(page: number) {
    return axios.get(url + '/' + page);
  },
  async post(post: Post) {
    return axios.post(url, post);
  },
};

export default communityApi;
