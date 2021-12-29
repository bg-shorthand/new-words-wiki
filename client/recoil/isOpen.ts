import { atom } from 'recoil';

const isOpenState = atom({
  key: 'isOpenState',
  default: {
    test: false,
  },
});

export { isOpenState };
