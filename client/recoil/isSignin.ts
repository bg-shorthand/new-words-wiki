import { atom } from 'recoil';

const isSigninState = atom({
  key: 'isSigninState',
  default: false,
});

export { isSigninState };
