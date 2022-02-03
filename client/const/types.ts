type Dialogs = 'signin' | 'signup';

interface User {
  email: string;
  nickname: string;
  admin: boolean;
  score: number;
}

interface NewUser {
  email: string;
  nickname: string;
  password: string;
}

interface Word {
  title: string;
  definition: string;
  history: string;
  example: string;
  images?: string[];
}

interface Comment {
  author: { nickname: string; score: number };
  content: string;
  time: number;
  number: number;
}

interface Post {
  title: string;
  content: string;
  time: number;
  author: string;
  number: number;
  comments: Comment[] | [];
  id: string;
  score: number;
}

interface Posts {
  title: string;
  time: number;
  author: string;
  number: number;
  commentNum: number;
  id: string;
  score: number;
}

export type { Dialogs, User, NewUser, Word, Comment, Post, Posts };
