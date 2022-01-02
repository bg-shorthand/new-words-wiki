import { ReactNode } from 'react';

interface DefaultProps {
  children?: ReactNode;
  className?: string;
}

interface User {
  email: string;
  nickname: string;
}

interface NewUser extends User {
  password: string;
}

export type { DefaultProps, User, NewUser };
