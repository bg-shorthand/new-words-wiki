import { ReactNode } from 'react';

interface DefaultProps {
  children?: ReactNode;
  className?: string;
}

interface User {
  email: string;
  nickname: string;
}

export type { DefaultProps, User };
