import { atom } from 'recoil';

const isOpenState = atom({
  key: 'isOpenState',
  default: {
    login: false,
  },
});

export { isOpenState };
