type Dialogs = 'signin' | 'signup';

interface User {
  email: string;
  nickname: string;
  admin: boolean;
  score: number;
}

interface NewUser extends User {
  password: string;
}

interface Word {
  title: string;
  definition: string;
  history: string;
  images?: string[];
}

interface Comment {
  author: string;
  content: string;
  time: number;
}

interface Post {
  title: string;
  content: string;
  time: number;
  author: string;
  number: number;
  comment: Comment;
  _id: string;
}

export type { Dialogs, User, NewUser, Word, Comment, Post };
