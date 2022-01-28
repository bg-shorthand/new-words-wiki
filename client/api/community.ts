import axios from 'axios';
import { Post } from 'const/types';

const url = process.env.NEXT_PUBLIC_DB_URL + '/community';

const communityApi = {
  async get(page: number) {
    return await axios.get(url + '/' + page);
  },
  async post(post: Post) {
    return await axios.post(url, post);
  },
  async getPost(id: string) {
    return await axios.get(url + '/post/' + id);
  },
  async deletePost(id: string) {
    return await axios.delete(url + '/post/' + id);
  },
};

export default communityApi;
