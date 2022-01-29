import axios from 'axios';
import { Comment, Post } from 'const/types';

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
  async updatePost(id: string, payload: { title: string; content: string }) {
    return await axios.put(url + '/post/' + id, payload);
  },
  async postComment(id: string, payload: Comment) {
    return await axios.post(url + '/comment/' + id, payload);
  },
};

export default communityApi;
