type Dialogs = 'signin' | 'signup';

interface User {
  email: string;
  nickname: string;
}

interface NewUser extends User {
  password: string;
}

export type { Dialogs, User, NewUser };
