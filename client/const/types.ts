type Dialogs = 'signin' | 'signup';

interface User {
  email: string;
  nickname: string;
  admin: boolean;
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

export type { Dialogs, User, NewUser, Word };
