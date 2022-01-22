import { User } from 'const/types';
import { atom } from 'recoil';

const isSigninState = atom({
  key: 'isSigninState',
  default: undefined as User | undefined,
});

export { isSigninState };
