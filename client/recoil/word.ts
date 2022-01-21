import { atom } from 'recoil';

const wordState = atom({
  key: 'wordState',
  default: {
    title: '',
    definition: '',
    history: '',
    images: [] as string[],
  },
});

export { wordState };
