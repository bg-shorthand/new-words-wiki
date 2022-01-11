import { atom } from 'recoil';

const myInfoState = atom({
  key: 'myInfoState',
  default: {
    email: '',
    nickname: '',
  },
});

export { myInfoState };
